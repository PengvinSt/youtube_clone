import mongoose from "mongoose";
import logger from "./logger";

const DB_CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://localhost:27017/youtube-clone";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_CONNECTION_STRING);
    logger.info("Connect to database");
  } catch (e) {
    logger.error(e, "Failed to connect to database. Goodbye");
    process.exit(1);
  }
};

export const disconnectFromDatabase = async () => {
  await mongoose.connection.close();

  logger.info("Disconnect from database");

  return;
};
