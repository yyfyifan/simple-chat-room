import SocketContext from "./socket-context";
import { socket } from "../../socket";
import useSocket from "./useSocket";

// eslint-disable-next-line react/prop-types
const SocketContextProvider = ({ children }) => {
  const { isConnected, messageEvents, connect, disconnect, sendMessage } = useSocket(socket);

  return (
    <SocketContext.Provider value={{ isConnected, messageEvents, connect, disconnect, sendMessage }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
