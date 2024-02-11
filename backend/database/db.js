import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const Connection = async () => {
  const URI = process.env.DB_URI;
  // const URI_AD = process.env.DB_URI_AD;

  try {
    const connection = await mongoose.connect(URI, { useNewUrlParser: true });
    console.log("Connected to Main Database successfully");

    // const connectionAd = await mongoose.createConnection(URI_AD, { useNewUrlParser: true });
    // console.log("Connected to Payment Database successfully");

    // return { connection, connectionAd };


    return { connection};

  } catch (error) {
    console.log("Error while connecting to the databases", error);
  }
};

export default Connection;