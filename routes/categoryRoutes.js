import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {
  createCatController,
  getAllCatController,
  updateCatController,
  deleteCatController,
} from "../controllers/categoryControllers.js";

const router = express.Router();

// Routes
// CREATE CATEGORY
router.post("/create", authMiddleware, createCatController);

// GET ALL CATEGORIES
router.get("/getAll", getAllCatController);

// UPDATE CATEGORY
router.put("/update/:id", authMiddleware, updateCatController);

// DELETE CATEGORY
router.delete("/delete/:id", authMiddleware, deleteCatController);

export default router;
