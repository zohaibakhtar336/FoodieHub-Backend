import express from "express";
import { testUserController } from "../controllers/testControllers.js";

const router = express.Router();

// Routes
// GET test user
router.get("/test-user", testUserController);

export default router;
