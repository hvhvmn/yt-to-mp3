import express from "express";
import ytRouter from "./routes/yt.routes.js";
import cors from "cors"
const server = express();
server.use(cors({
    origin:"http://localhost:5173"
}))
server.use("/api/yt",ytRouter)
server.use(express.static("./public"))
app.get("*", (req, res) => {
    res.sendFile(path.resolve("backend/public/index.html"));
  });
export default server;