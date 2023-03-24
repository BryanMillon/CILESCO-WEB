const express = require("express");
const videoSchema = require("../models/video.js");
const axios = require("axios");
require("dotenv").config();
const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 300, checkperiod: 60 });

const router = express.Router();

router.get("/videos", async (req, res) => {
  try {
    let query = req.query.query;
    if (!query) {
      query = "";
    }

    // Check if result is already in cache
    const cacheKey = `videos-${query}`;
    const cachedResult = cache.get(cacheKey);
    if (cachedResult) {
      return res.status(200).json(cachedResult);
    }

    // Perform expensive operation and store result in cache
    const regex = new RegExp(query.normalize('NFD').replace(/[\u0301\u0308]/g, ''), "i");
    const videos = await videoSchema
      .find({ title: regex })
      .sort({ title: 1 })
      .exec();

    if (videos.length === 0) {
      const maxResults = 50;
      let nextPageToken = null;
      let videoItems = [];

      do {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/playlistItems",
          {
            params: {
              part: "snippet",
              playlistId: process.env.PLAYLIST_ID,
              maxResults,
              pageToken: nextPageToken,
              key: process.env.API_KEY,
            },
          }
        );

        nextPageToken = response.data.nextPageToken;
        videoItems = videoItems.concat(
          response.data.items
            .filter(
              (item) =>
                item.snippet && item.snippet.resourceId.kind === "youtube#video"
            )
            .map((item) => {
              const videoId = item.snippet.resourceId.videoId;
              const title = item.snippet.title.normalize('NFD').replace(/[\u0301\u0308]/g, '');;
              const thumbnail =
                item.snippet.thumbnails.high && item.snippet.thumbnails.high.url
                  ? item.snippet.thumbnails.high.url
                  : item.snippet.thumbnails.default &&
                    item.snippet.thumbnails.default.url;
              const description = item.snippet.description;
              // check if the video is deleted
              const isDeleted =
                title === "Deleted video" &&
                description === "This video is unavailable.";
              return { videoId, title, thumbnail, description, isDeleted };
            })
        );
      } while (nextPageToken);

      // remove deleted videos from videoItems
      const filteredVideos = videoItems.filter((video) => !video.isDeleted);

      if (filteredVideos.length === 0) {
        res.status(404).send({ msg: "No videos found" });
      } else {
        // insert non-deleted videos into the database
        const existingVideos = await videoSchema.find({ videoId: { $in: filteredVideos.map(video => video.videoId) } });
        const newVideos = filteredVideos.filter(video => !existingVideos.some(existingVideo => existingVideo.videoId === video.videoId));
        await videoSchema.insertMany(newVideos);
  
        // filter the database based on the search query
        const sortedVideos = await videoSchema
          .find({ title: regex })
          .sort({ title: 1 })
          .exec();
  
        if (sortedVideos.length === 0) {
          res.status(404).send({ msg: "No videos found with the given title" });
        } else {
          res.status(200).json(sortedVideos);
        }
      }
    } else {
      res.status(200).json(videos);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
  });

router.get("/videos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const video = await videoSchema.findById(id);
    if (!video) {
      return res.status(404).send({ message: "Video not found" });
    } else {
      res.status(200).json(video);
    }
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
