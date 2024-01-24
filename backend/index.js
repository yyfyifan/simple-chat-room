const express = require("express");
const app = express();
const port = process.env.port || 10001;

app.get("/", (req, res) => {
  res.send("Hello World222!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
