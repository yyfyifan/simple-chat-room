const express = require("express");
const app = express();
const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("Hello World222!");
});

app.listen(port, () => {
  console.log(`Service is listening on "http://localhost:${port}`);
});
