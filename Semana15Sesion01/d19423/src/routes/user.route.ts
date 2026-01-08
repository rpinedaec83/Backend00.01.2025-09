import { Express } from "express";
import { authJwt } from "../middlewares"
import * as controller from "../controllers/user.controller";

export default (app: Express) => {
  app.use((_req, res, next) => {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });
  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user",[authJwt.verifyToken], controller.onlyUser)

  app.get("/api/test/moderator",[authJwt.verifyToken, authJwt.isModerator],controller.onlyModerator);
  app.get("/api/test/admin",[authJwt.verifyToken, authJwt.isAdmin],controller.onlyAdmin);
}