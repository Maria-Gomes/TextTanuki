const express = require("express");
const { analyzeText } = require("./functions");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/analyze", (req, res) => {
  var text = req.body.text;
  res.json(analyzeText(text));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
