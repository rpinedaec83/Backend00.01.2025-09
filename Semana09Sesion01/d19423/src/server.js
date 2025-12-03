console.log("Inicio de la aplicacion")

const express = require('express');
const {sequelize, User} = require('./models');
const syncDB = require('./sync-db');


const app = express();

app.use(express.json());

app.listen(process.env.PORT || 3000, async()=>{
    try {
        await syncDB();
        console.log("Sincronizando bse de datos");
    } catch (error) {
        console.error(error)
    }
    console.log("Server Ready")
})