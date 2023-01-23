import express from "express";
import config from "config";
import connectDb from "./utils/db.connect";
import logToConsole from "./utils/logger";
import routes from "./router";

const port = config.get<number>("port");

const app = express();
app.use(express.)

app.listen(port, async () => {
  logToConsole.info(`Server running on http://localhost:${port}`);
  await connectDb();
  routes(app);
});
