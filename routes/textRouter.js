const express = require("express");
const router = express.Router();

const controller = require("../textController");

router.post("/analyze", controller.analyzeText);

router.post("/similarity", controller.findSimilarity);

module.exports = router;
