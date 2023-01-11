import mongoose from "mongoose";
import config from "config";
import logToConsole from "../utils/logger";

async function connectDb() {
  try {
    const mongoUri = config.get<string>("mongoUri");
    await mongoose.connect(mongoUri);
    logToConsole.info("database is connected");
  } catch (error) {
    logToConsole.error("could not connect to database");
    process.exit(1);
  }
}
export default connectDb;
