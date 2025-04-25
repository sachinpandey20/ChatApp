import { Router } from "express";
import { verifyToken } from "../middleware.js/AuthMiddleware.js";
import { createChannel } from "../controllers/ChannelController.js";

const channelRoutes = new Router();

channelRoutes.get("/create-channel", verifyToken, createChannel);

export default channelRoutes;