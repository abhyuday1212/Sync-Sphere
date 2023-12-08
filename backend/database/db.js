import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URI = `mongodb+srv://${username}:${password}@syncsphere.hfdsupe.mongodb.net/your-database-name`;

  try {
    await mongoose.connect(URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

export default Connection;
