import SocketContext from "./socket-context";
import { useContext } from "react";

const useSocketContext = () => useContext(SocketContext);

export default useSocketContext;
