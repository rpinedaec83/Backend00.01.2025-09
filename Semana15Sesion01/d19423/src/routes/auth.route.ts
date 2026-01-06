import { Express, RequestHandler,Request, Response  } from "express";
import { verifySignUp } from "../middlewares";

export default function authRoutes(app: Express) {
    app.use((_req, res, next) => {
        res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
        next();
    });
     app.post("/api/auth/signup",[verifySignUp.checkDuplicateUsernameOrEmail as RequestHandler],(req: Request,res: Response)=>{
        res.status(200).json({ok:"ok"})
     })
}