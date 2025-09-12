import JWT from "jsonwebtoken";

// Auth Middleware
const authMiddleware = async (req, res, next) => {
  try {
    // Get token from headers
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) {
      return res.status(401).send({
        success: false,
        message: "Auth token is required",
      });
    }

    JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Unauthorized user",
        });
      }
      req.body.id = decoded.id; // Attach user ID to request
      next(); // Proceed to next middleware/controller
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in Auth Middleware",
      error,
    });
  }
};

export default authMiddleware;
