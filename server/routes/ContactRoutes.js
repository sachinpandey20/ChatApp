import { verifyToken } from "../middleware.js/AuthMiddleware.js";
import { getAllContacts, getContactsForDMList, searchContacts } from "../controllers/ContactsController.js";
import { Router } from "express";

const contactRoutes = Router();
contactRoutes.post("/search", verifyToken, searchContacts);
contactRoutes.get("/get-contacts-for-dm", verifyToken, getContactsForDMList);
contactRoutes.get("/get-all-contacts", verifyToken, getAllContacts);

export default contactRoutes;