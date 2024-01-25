import { useState, useEffect } from "react";

const useSocket = socket => {
  const [isConnected, setIsConnected] = useState(false);
  const [messageEvents, setMessageEvents] = useState([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onMessageEvent(value) {
      setMessageEvents(previous => [...previous, value]);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("message", onMessageEvent); // message handler

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("message", onMessageEvent);
    };
  }, [socket]);

  const connect = () => {
    socket.connect();
  };

  const disconnect = () => {
    socket.disconnect();
  };

  const sendMessage = (message, ackFunction) => {
    socket.timeout(5000).emit("message", message, ackFunction);
  };

  return {
    isConnected,
    messageEvents: Object.freeze(messageEvents),
    connect,
    disconnect,
    sendMessage,
  };
};

export default useSocket;
