import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`MongoDB connected !! DB HOST: ${connectionInstance}`);
  } catch (error) {
    console.error("MongoDb connection Error", error);
    process.exit(1);
  }
};
