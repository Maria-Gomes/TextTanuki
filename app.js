const express = require("express");
const app = express();
app.use(express.json());

const textRouter = require("./routes/textRouter");
app.use("/text", textRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
