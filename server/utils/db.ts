import mongoose from "mongoose";

const dbUri = process.env.DATABASE_URI || ""; // Get the database URI from the environment variable

const connectDB = async () => {
  // what is strict query? https://mongoosejs.com/docs/migrating_to_6.html

  try {
    // Connect to the database
    await mongoose.connect(dbUri).then((data: any) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`); // Log the connection details
    });
  } catch (error: any) {
    console.log(error.message); // Log the error message
    setTimeout(connectDB, 5000); // Retry in 5 seconds
  }
};
export default connectDB;
