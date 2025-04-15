import { verifyToken } from "../middleware.js/AuthMiddleware.js";
import { searchContacts } from "../controllers/ContactsController.js";
import { Router } from "express";

const contactRoutes = Router();
contactRoutes.post("/search", verifyToken, searchContacts);

export default contactRoutes;