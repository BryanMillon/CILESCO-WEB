const express = require("express");
const router = express.Router();
const infoUrl = require("../controller/url_Controller");

router.get("/", getUrl);

module.exports = router;