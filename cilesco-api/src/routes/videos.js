const express = require("express");
const videoSchema = require("../models/video.js");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

router.get("/videos", async (req, res) => {
    try {
        let query = req.query.query;
        if (!query) {
            query = '';
        }
        
        const regex = new RegExp(query, 'i'); // i: insensitive, case-insensitive
        const videos = await videoSchema.find({ title: regex }).sort({ title: 1 }).exec();
    
        if (videos.length === 0) {
          const maxResults = 50;
          let nextPageToken = null;
          let videoItems = [];
    
          do {
            const response = await axios.get(
              "https://www.googleapis.com/youtube/v3/search",
              {
                params: {
                  part: "snippet",
                  channelId: process.env.CHANNEL_ID,
                  maxResults,
                  pageToken: nextPageToken,
                  key: process.env.API_KEY,
                },
              }
            );
    
            nextPageToken = response.data.nextPageToken;
            videoItems = videoItems.concat(
              response.data.items
                .filter((item) => item.id && item.id.videoId)
                .map((item) => ({
                  videoId: item.id.videoId,
                  title: item.snippet.title,
                  thumbnail: item.snippet.thumbnails.high.url,
                  description: item.snippet.description,
                }))
            );
    
            // Insert videos in batches of 50 to reduce impact on database
            if (videoItems.length >= 50) {
              await videoSchema.insertMany(videoItems.splice(0, 50));
            }
            
          } while (nextPageToken);
    
          // Insert any remaining videos
          if (videoItems.length > 0) {
            await videoSchema.insertMany(videoItems);
          }
          const sortedVideos = await videoSchema.find({ title: regex }).sort({ title: 1 }).exec();
          if (sortedVideos.length === 0) {
              res.status(404).send({ msg: "No videos found with the given title" });
          } else {
              res.status(200).json(sortedVideos);
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
        return res.status(404).send({ message: 'Video not found' });
      }else{
        res.status(200).json(video)
      }
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });


module.exports = router;
