import {Router} from "express";
import requireAuthSession from "../middleware/authSession";

const router = Router();

router.get("/private/profile", requireAuthSession, (req, res) => {
    res.json({user: req.session.user});
});

export default router;
