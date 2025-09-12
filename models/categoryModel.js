import mongoose from "mongoose";

// Category Schema
const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Category title is required"],
      trim: true,
    },
    imageUrl: {
      type: String,
      default:
        "https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png",
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

// Export model
export default mongoose.model("Category", categorySchema);
