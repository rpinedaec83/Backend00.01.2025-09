require('dotenv').config();
const express = require("express");
const http = require("http");
const socketIO = require('socket.io');

const app = express();
const server  = http.createServer(app);

const PORT = process.env.PORT || 8080;

const io = socketIO(server);

io.on("connection",(socket)=>{
    console.log("Nuevo Usuario conectado");
    socket.on("disconnect",()=>console.log("Usuario Desconectado"));
    socket.on("sendMessage", async(message, callback)=>{
        try {
            console.log(message)
            socket.emit("message", message);
            callback();
        } catch (error) {
            console.error(error)
        }
    })
})

app.use(express.static('public'));

server.listen(PORT,()=>{
    console.log(`Servidor escuchando el puerto ${PORT}`)
})