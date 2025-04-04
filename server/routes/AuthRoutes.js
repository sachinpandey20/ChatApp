import { Router } from "express";
import { getUserInfo, login, signup, updateProfile } from "../controllers/Authcontroller.js";
import { verifyToken } from "../middleware.js/AuthMiddleware.js";

const authRoutes = Router();
authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.get("/user-info", verifyToken, getUserInfo);
authRoutes.post("/update-profile", verifyToken, updateProfile);

export default authRoutes;
