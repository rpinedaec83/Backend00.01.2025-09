const express = require("express");
const User = require("../models/User");
const router = express.Router();

//obtener todos
router.get("/", async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

// crear uno
router.post("/", async (req, res) => {
    const { nombre, correo } = req.body;
    const newUser = await User.create({ nombre, correo });
    res.json(newUser);
});

// obtener por id
router.get("/:id", async (req, res) => {
    const user = await User.findByPk(req.params.id);
    res.json(user);
});

// actualizar
router.put("/:id", async (req, res) => {
    const { nombre, correo } = req.body;
    await User.update({ nombre, correo }, { where: { id: req.params.id } });
    res.json({ message: "Actualizado" });
});

// eliminar
router.delete("/:id", async (req, res) => {
    await User.destroy({ where: { id: req.params.id } });
    res.json({ message: "Eliminado" });
});



module.exports = router;