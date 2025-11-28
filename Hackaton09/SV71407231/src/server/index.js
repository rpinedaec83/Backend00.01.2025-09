const express = require("express");
const { syncDB } = require("../config/db");

require("../models");

const app = express();

app.use(express.json());

async function start() {
    await syncDB();
    app.listen(process.env.PORT || 3000, () => {
        console.log("Servidor iniciado en puerto", process.env.PORT || 3000);
    });
}

start();