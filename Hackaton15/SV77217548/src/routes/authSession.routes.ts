import {Router} from "express";
import * as controller from "../controllers/authSession.controller";
import requireAuthSession from "../middleware/authSession";

const router = Router();

router.post("/session/register", controller.register);
router.post("/session/login", controller.login);
router.post("/session/logout", controller.logout);
router.get("/me", requireAuthSession, controller.me);

export default router;
