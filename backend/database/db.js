import mongoose from "mongoose";

const Connection = async () => {
  const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster1.zbqgq7z.mongodb.net/`;

  try {
    await mongoose.connect(URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

export default Connection;
