import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5000",
  },
});

const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("Hello World222!");
});

io.on("connection", socket => {
  console.log("a user connected");

  socket.on("message", (value, callback) => {
    console.log(`received a message: ${value}`);
    callback("acked");

    // use the 'io' object to broadcast the message
    io.emit("message", value);
  });
  socket.on("disconnect", () => {
    console.log("a user left");
  });
});

server.listen(port, () => {
  console.log(`server is listening on "http://localhost:${port}`);
});
