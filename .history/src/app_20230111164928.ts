import express from "express";
import config from "config";
import connectDb from "./utils/db.connect";
import logToConsole from "./utils/logger";

const port = config.get<number>("port");

const app = express();

app.listen(port, async () => {
  logToConsole.info(`Server running on http://localhost:${port}`);
  await connectDb();
});
