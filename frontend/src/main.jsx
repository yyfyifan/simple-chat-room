import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { SocketContextProvider } from "./contexts/socket-context";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SocketContextProvider>
      <App />
    </SocketContextProvider>
  </React.StrictMode>
);
