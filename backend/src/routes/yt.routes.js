import { Router } from "express";
import { createYt} from "../controllers/yt.controllers.js";

const ytRouter = Router();

ytRouter.get("/", createYt);
export default ytRouter;