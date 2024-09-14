import mongoose from "mongoose";

const dbUri = process.env.DATABASE_URI || "";

const connectDB = async () => {
  try {
    await mongoose.connect(dbUri).then((data: any) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    });
  } catch (error: any) {
    console.log(error.message);
    setTimeout(connectDB, 5000);
  }
};
export default connectDB;
