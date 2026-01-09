import {Router} from "express";
import * as controller from "../controllers/authJwt.controller";
import requireAuthJwt from "../middleware/authJwt";

const router = Router();

router.post("/jwt/login", controller.login);
router.post("/jwt/refresh", (req, res) => {
    // #swagger.tags = ["JWT"]
    // #swagger.security = [{"refreshAuth": []}]
    return controller.refresh(req, res);
});
router.post("/jwt/logout", (req, res) => {
    // #swagger.tags = ["JWT"]
    // #swagger.security = [{"refreshAuth": []}]
    return controller.logout(req, res);
});
router.get("/jwt/me", requireAuthJwt, (req, res) => {
    // #swagger.tags = ["JWT"]
    // #swagger.security = [{"bearerAuth": []}]
    return controller.me(req, res);
});

export default router;
