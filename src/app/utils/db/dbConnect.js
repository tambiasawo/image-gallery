"use server";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // Check the connection status
    if (mongoose.connection.readyState === 1) {
      console.log("MongoDB connection established successfully.");
      return true;
    }
  } catch (e) {
    console.error("MongoDB connection failed:", e);
    throw new Error("Couldn't connect to the database");
  }
};

export default connectDB;
