import mongoose from "mongoose";

// User Schema
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "User name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    address: {
      type: [String], // Array of addresses
      default: [],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    userType: {
      type: String,
      enum: ["client", "admin", "vendor", "driver"],
      default: "client",
    },
    profile: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png",
    },
    answer: {
      type: String,
      required: [true, "Security answer is required"],
      trim: true,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

// Export model
export default mongoose.model("User", userSchema);
