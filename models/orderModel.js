import mongoose from "mongoose";

// Order Schema
const orderSchema = new mongoose.Schema(
  {
    foods: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food", // Reference to Food model
        required: true,
      },
    ],
    payment: {
      type: Object, // Can be expanded later with payment details
      default: {},
    },
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to User model
      required: true,
    },
    status: {
      type: String,
      enum: ["preparing", "prepare", "on the way", "delivered"],
      default: "preparing",
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

// Export model
export default mongoose.model("Orders", orderSchema);
