import { useState } from "react";
import { useSocketContext } from "../contexts/socket-context";

const ChatInput = () => {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { sendMessage } = useSocketContext();

  function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    sendMessage(value, () => {
      setIsLoading(false);
    });
    setValue("");
  }

  return (
    <form onSubmit={onSubmit}>
      <input onChange={e => setValue(e.target.value)} value={value} />

      <button type="submit" disabled={isLoading}>
        Submit
      </button>
    </form>
  );
};

export default ChatInput;
