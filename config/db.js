import mongoose from "mongoose";

// Function to connect to MongoDB database
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected Successfully`.bgWhite);
  } catch (error) {
    console.log("MongoDB Error", error);
  }
};

export default connectDb;
