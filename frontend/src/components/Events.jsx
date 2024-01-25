import { useSocketContext } from "../contexts/socket-context";
const Events = () => {
  const { messageEvents } = useSocketContext();
  return (
    <div>
      <p>Events</p>
      <ul>
        {messageEvents.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </div>
  );
};
export default Events;
