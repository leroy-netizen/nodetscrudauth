import express from "express";
import config from "config";
import connectDb from "./utils/db.connect.js";

const port = config.get<number>("port");

const app = express();

app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
  await connectDb();
});
