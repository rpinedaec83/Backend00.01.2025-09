import {Router} from "express";
import * as controller from "../controllers/authSession.controller";
import requireAuthSession from "../middleware/authSession";

const router = Router();

router.post("/session/register", controller.register);
router.post("/session/login", controller.login);
router.post("/session/logout", (req, res) => {
    // #swagger.tags = ["Session"]
    // #swagger.security = [{"sessionAuth": []}]
    return controller.logout(req, res);
});
router.get("/me", requireAuthSession, (req, res) => {
    // #swagger.tags = ["Session"]
    // #swagger.security = [{"sessionAuth": []}]
    return controller.me(req, res);
});

export default router;
