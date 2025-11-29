const express = require("express");
const { syncDB } = require("../config/db");

const userRoutes = require("../routes/user.routes");

const app = express();

require("../models");



app.use(express.json());

app.use("/users", userRoutes);

async function start() {
    await syncDB();
    app.listen(process.env.PORT || 3000, () => {
        console.log("Servidor iniciado en puerto", process.env.PORT || 3000);
    });
}

start();