import { useSocketContext } from "../contexts/socket-context";

const ConnectionState = () => {
  const { isConnected } = useSocketContext();
  return <p>State: {isConnected ? `🟢 connected` : `🔴 disconnected`}</p>;
};
export default ConnectionState;
