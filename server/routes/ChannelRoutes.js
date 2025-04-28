import { Router } from "express";
import { verifyToken } from "../middleware.js/AuthMiddleware.js";
import { createChannel, getUserChannels } from "../controllers/ChannelController.js";

const channelRoutes = new Router();

channelRoutes.post("/create-channel", verifyToken, createChannel);
channelRoutes.get("/get-user-channels", verifyToken, getUserChannels);

export default channelRoutes;