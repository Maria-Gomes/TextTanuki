const express = require("express");
const app = express();
app.use(express.json());

const textRouter = require("./routes/textRouter");
app.use("/text", textRouter);
app.use(function (err, req, res, next) {
  res
    .status(err.status || 500)
    .json({ status: err.status, message: err.message });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
