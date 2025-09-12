import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {
  getUserController,
  updateUserController,
  updatePasswordController,
  resetPasswordController,
  deleteProfileController,
} from "../controllers/userControllers.js";

const router = express.Router();

// Routes
// GET USER || GET
router.get("/getUser", authMiddleware, getUserController);

// UPDATE PROFILE
router.put("/updateUser", authMiddleware, updateUserController);

// PASSWORD UPDATE
router.post("/updatePassword", authMiddleware, updatePasswordController);

// RESET PASSWORD
router.post("/resetPassword", authMiddleware, resetPasswordController);

// DELETE USER
router.delete("/deleteUser/:id", authMiddleware, deleteProfileController);

export default router;
