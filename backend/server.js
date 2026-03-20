import server from "./src/app.js";
import dotenv from "dotenv"
import { config } from "dotenv";
dotenv.config()
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});