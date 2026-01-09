import {Router} from "express";
import * as controller from "../controllers/authJwt.controller";
import requireAuthJwt from "../middleware/authJwt";

const router = Router();

router.post("/jwt/login", controller.login);
router.post("/jwt/refresh", controller.refresh);
router.post("/jwt/logout", controller.logout);
router.get("/jwt/me", requireAuthJwt, controller.me);

export default router;
