import userModel from "../models/userModel.js";

// Admin Access Middleware
const adminMiddleware = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.body.id);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    if (user.userType !== "admin") {
      return res.status(403).send({
        success: false,
        message: "Access denied: Admins only",
      });
    }

    next(); // Proceed to next middleware/controller
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in Admin Middleware",
      error,
    });
  }
};

export default adminMiddleware;
