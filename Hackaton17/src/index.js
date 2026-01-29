require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());

io.on("connection", socket => {
  console.log("Usuario conectado");
});

server.listen(3000, () => {
  console.log("Servidor en puerto 3000");
});

const userRoutes = require("./routes/user.routes");
app.use("/api/users", userRoutes);

const passport = require("passport");
require("./config/passport");

app.use(passport.initialize());

app.get("/auth/google",
  passport.authenticate("google", { scope: ["profile","email"] })
);

app.get("/auth/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);
