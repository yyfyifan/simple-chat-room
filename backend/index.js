import app from "./app.js";
import registerSocketIo from "./socket-instance.js";

import { createServer } from "node:http";

const PORT = process.env.port || 3000;

const server = createServer(app);
registerSocketIo(server);

server.listen(PORT, () => {
  console.log(`server is listening on "http://localhost:${PORT}`);
});
