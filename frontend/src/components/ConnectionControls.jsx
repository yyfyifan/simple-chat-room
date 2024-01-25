import { useSocketContext } from "../contexts/socket-context";
const ConnectionControls = () => {
  const { connect, disconnect } = useSocketContext();
  return (
    <div>
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
    </div>
  );
};
export default ConnectionControls;
