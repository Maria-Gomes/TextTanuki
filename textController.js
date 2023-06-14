const { analyzeText, findSimilarity } = require("./functions");

exports.analyzeText = (req, res, next) => {
  var text = req.body.text;
  try {
    res.json(analyzeText(text));
  } catch (err) {
    next(err);
  }
};

exports.findSimilarity = (req, res, next) => {
  var text1 = req.body.text1;
  var text2 = req.body.text2;
  try {
    res.json(findSimilarity(text1, text2));
  } catch (err) {
    next(err);
  }
};
