const { analyzeText, findSimilarity } = require("./functions");

exports.analyzeText = (req, res) => {
  var text = req.body.text;
  res.json(analyzeText(text));
};

exports.findSimilarity = (req, res) => {
  var text1 = req.body.text1;
  var text2 = req.body.text2;
  res.json(findSimilarity(text1, text2));
};
