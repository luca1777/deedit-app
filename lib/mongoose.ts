import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    return console.error("MongoDB URL not found");
  }

  if (isConnected) {
    return console.log("Using existing database connection");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "deedit-app",
    });

    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to database: ", error);
  }
};
