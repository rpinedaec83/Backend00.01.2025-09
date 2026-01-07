import { Express, RequestHandler, Request, Response } from "express";
import { verifySignUp } from "../middlewares";
import * as controller from "../controllers/auth.controller";

export default function authRoutes(app: Express) {
    app.use((_req, res, next) => {
        res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
        next();
    });
    app.post("/api/auth/signup",
        [
            verifySignUp.checkDuplicateUsernameOrEmail as RequestHandler,
            verifySignUp.checkRoleExisted as RequestHandler
        ],
        controller.signup);
    app.post("/api/auth/signout",controller.signout);
    app.post("/api/auth/signin", controller.signin)
}