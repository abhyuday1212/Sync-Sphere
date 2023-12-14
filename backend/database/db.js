import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const Connection = async () => {
  const URI = process.env.DB_URI;
  const URI_AD = process.env.DB_URI_AD;

  try {
    const connection = await mongoose.connect(URI);
    const connectionAd = await mongoose.createConnection(URI_AD);

    console.log("First database connected successfully");
    console.log("Second database connected successfully");

    return { connection, connectionAd };
  } catch (error) {
    console.log("Error while connecting to the databases", error);
  }
};

// In your main code:

// const { connection, connectionAd } = await Connection();

// Use `connection` and `connectionAd` for your respective database interactions


export default Connection;
