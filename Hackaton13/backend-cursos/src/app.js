const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

module.exports = app;


app.get("/", (req, res) => {
  res.send("API Cursos Online funcionando");
});

app.use("/api/courses", require("./routes/course.routes"));
