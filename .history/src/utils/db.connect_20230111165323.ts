import mongoose from "mongoose";
import config from "config";
// import logToConsole from "../utils/logger/"

async function connectDb() {
  try {
    const mongoUri = config.get<string>("mongoUri");
    await mongoose.connect(mongoUri);
    console.log("database is connected saii");
  } catch (error) {
    console.error("could not connect to database");
    process.exit(1);
  }
}
export default connectDb;
