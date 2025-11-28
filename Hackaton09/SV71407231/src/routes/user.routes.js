const express = require("express");
const User = require("../models/User");
const router = express.Router();


router.get("/", async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

router.post("/", async (req, res) => {
    const nuevo = await User.create(req.body);
    res.json(nuevo);
});

module.exports = router;