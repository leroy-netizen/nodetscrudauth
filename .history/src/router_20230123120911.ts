import { Express, Request, Response } from "express";
import { appendFile } from "fs";

const routes = (app: Express) => {
  app.get("/home", (req: Request, res: Response) => res.sendStatus(200));


  // route to create a user

  app.post("/api/users")
};
export default routes;
