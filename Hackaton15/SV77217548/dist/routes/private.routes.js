"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authSession_1 = __importDefault(require("../middleware/authSession"));
const router = (0, express_1.Router)();
router.get("/private/profile", authSession_1.default, (req, res) => {
    res.json({ user: req.session.user });
});
exports.default = router;
