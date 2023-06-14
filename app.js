const express = require("express");
const { analyzeText, findSimilarity } = require("./functions");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/analyze", (req, res) => {
  var text = req.body.text;
  res.json(analyzeText(text));
});

app.post("/similarity", (req, res) => {
  var text1 = req.body.text1;
  var text2 = req.body.text2;
  res.json(findSimilarity(text1, text2));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
