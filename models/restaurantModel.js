import mongoose from "mongoose";

// Restaurant Schema
const restaurantSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Restaurant title is required"],
      trim: true,
    },
    imageUrl: {
      type: String,
      default:
        "https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png",
    },
    foods: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food", // Reference to Food model
      },
    ],
    time: {
      type: String,
      trim: true,
    },
    pickup: {
      type: Boolean,
      default: true,
    },
    delivery: {
      type: Boolean,
      default: true,
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
    logoUrl: {
      type: String,
    },
    rating: {
      type: Number,
      default: 1,
      min: 1,
      max: 5,
    },
    ratingCount: {
      type: Number,
      default: 0,
    },
    code: {
      type: String,
      trim: true,
    },
    coords: {
      id: { type: String },
      latitude: { type: Number },
      latitudeDelta: { type: Number },
      longitude: { type: Number },
      longitudeDelta: { type: Number },
      address: { type: String, trim: true },
      title: { type: String, trim: true },
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

// Export model
export default mongoose.model("Restaurant", restaurantSchema);
