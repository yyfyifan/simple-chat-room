import ConnectionState from "./ConnectionState";
import ConnectionControls from "./ConnectionControls";
import Events from "./Events";
import ChatInput from "./ChatInput";

function App() {
  return (
    <div>
      <ConnectionState />
      <Events />
      <ChatInput />
      <ConnectionControls />
    </div>
  );
}

export default App;
