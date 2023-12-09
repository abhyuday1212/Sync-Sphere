import mongoose from "mongoose";

const Connection = async () => {
  const URI = process.env.DB_URI;

  try {
    await mongoose.connect(URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

export default Connection;
