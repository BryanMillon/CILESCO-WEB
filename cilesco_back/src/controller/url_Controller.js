const UrlModel = require("../model/url_Model");
const infoUrl = {};

getUrl = async () => {
  try {
    let response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCNYW2vfGrUE6R5mIJYzkRyQ&maxResults=50&key=AIzaSyCdRuNg_ME6F_c1oOhESVnRXtQxAtCABUE"
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ msg: "video no encontrado" });
  }
};

module.exports = infoUrl;
