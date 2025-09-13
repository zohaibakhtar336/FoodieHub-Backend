import express from "express";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import restaurantRoutes from './routes/restaurantRoutes.js'
import categoryRoutes from "./routes/categoryRoutes.js";
import foodRoutes from "./routes/foodRoutes.js";

// dotenv configuration
dotenv.config();

// DB connection
connectDb();

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
// URL => http://localhost:8000
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/restaurant", restaurantRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/food", foodRoutes);

app.get("/", (req, res) => {
  return res.status(200).send(`
    <h1>Welcome to FoodieHub 🍔</h1>
    <p>This is a Node.js + Express + MongoDB backend project.</p>
    <p>You can use the API endpoints to manage users, restaurants, foods, categories, and orders.</p>
    <p>Base API URL: ${req.protocol}://${req.get("host")}/api/v1</p>
  `);
});

// PORT
const PORT = process.env.PORT || 5000;

// listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.white.bgMagenta);
});
