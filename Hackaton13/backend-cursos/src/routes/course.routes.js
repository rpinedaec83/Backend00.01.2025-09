const router = require("express").Router();
const auth = require("../middlewares/auth");
const role = require("../middlewares/role");

router.get("/", (req, res) => {
  res.json({ msg: "Lista de cursos" });
});

module.exports = router;
