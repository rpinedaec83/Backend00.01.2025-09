require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const axios = require('axios');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Conectado a MongoDB 🔥');
    })
    .catch((error) => {
        console.error('Error al conectar a MongoDB:', error);
    }); 

const mensajeSchema = new mongoose.Schema({
    usuario: { type:String, required:true},
    texto: { type: String, required:true},
    esBot: { type: Boolean, required: false},
    fecha: { type: Date, default: Date.now},
    editado: { type: Boolean, default: false}
});

const Mensaje = mongoose.model('Mensaje', mensajeSchema);

app.use(express.static('public'));

async function cargarMensajes(){
    return await Mensaje.find().sort({fecha:1}).limit(50);
};

async function responderConIA(mensajeUsuario){
    if(!mensajeUsuario.toLowerCase().includes('bot') && !mensajeUsuario.toLowerCase().includes('deepseek') && !mensajeUsuario.toLowerCase().includes('asistente')) {
        return null;
    };

    try{
        const response = await axios.post('http://api.deepseek.com/v1/chat/completions',
            {
                model: process.env.DEEPSEEK_MODEL,
                messages: [
                    {
                        role: 'system',
                        content: 'Te llamas Grok. Eres un asistente util y divertido para estudiantes de programacion. Responde en espanol, se breve y amigable.'
                    },
                    {
                        role: 'user',
                        content: mensajeUsuario
                    }
                ],
                max_tokens: 300,
                temperature: 0.7
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ${process.env.DEEPSEEK_API_KEY'
                }
            }
        );

        return response.data.choices[0].message.content.trim();
    }catch(error){
        console.error('Error con DeepSeek:', error.message);
        return "Ups... algo salio mal con el bot. Intenta de nuevo."
    }
};

io.on('connection', async(socket)=>{
    console.log('Usuario conectado', socket.id);

    const mensajes = await cargarMensajes();
    socket.emit('historial', mensajes);

    socket.on('mensaje', async (data) =>{
        const { usuario,texto } = data;

        const nuevoMensaje = new Mensaje({usuario,texto});
        await nuevoMensaje.save();

        io.emit('mensaje', nuevoMensaje);

        const respuesatBot = await responderConIA(texto);
        if(respuesatBot){
            const msgBot = new Mensaje({
                usuario: 'DeepSeek Bot',
                texto: respuesatBot,
                esBot: true
            });
            await msgBot.save();
            io.emit('mensaje', msgBot);
        }
    });

    socket.on('editar-mensaje', async ({id,nuevoTexo})=>{
        const msg = await Mensaje.findById(id);
        if(msg){
            msg.texto = nuevoTexo;
            msg.editado = true;
            await msg.save();
            io.emit('mensaje-recibido',msg);
        }
    });

    socket.on('borrar-mensaje', async(id)=>{
        await Mensaje.findByIdAndDelete(id);
        io.emit('mensaje-borrado', id);
    });

    socket.on('disconnect', ()=>{
        console.log('Usuario desconectado', socket.id);
    });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http:/localhost:${PORT} 🚀`);
});