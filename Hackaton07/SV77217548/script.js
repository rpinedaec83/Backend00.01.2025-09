console.log("Inicio de la aplicacion")

const express = require("express");
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8080;

app.get('/',(req,res)=>(
    res.send("Hola desde mi servidor de express")
))

app.listen(PORT, ()=>(
    console.log(`Servidor escuchando en el puerto ${PORT}`)
))
