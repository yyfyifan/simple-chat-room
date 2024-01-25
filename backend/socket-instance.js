import { Server } from "socket.io";

const registerSocketIo = server => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5000",
    },
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
};

export default registerSocketIo;
