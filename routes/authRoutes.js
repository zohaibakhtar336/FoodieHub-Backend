import express from "express";
import { registerController, loginController } from "../controllers/authControllers.js";

const router = express.Router();

// Routes
// REGISTER || POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

export default router;
