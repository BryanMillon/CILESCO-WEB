const mongoose = require("mongoose");
const { Schema } = mongoose;

const UrlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
});

const UrlModel = mongoose.model("Url", UrlSchema);

module.exports = UrlModel;
