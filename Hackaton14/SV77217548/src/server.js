console.log('Inicio de la aplicacion');

require('dotenv').config();

const path = require('path');
const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const OpenAI = require('openai');
const {ObjectId} = require('mongodb');
const {getMessagesCollection} = require('./db');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 8080;
const OPENAI_MODEL = process.env.openAIModel || 'gpt-5';
const SYSTEM_PROMPT = process.env.SYSTEM_PROMPT || 'Eres un asistente para estudiantes de backend. Responde en español de forma clara y breve.';
const HISTORY_LIMIT = Number.parseInt(process.env.HISTORY_LIMIT || '50', 10);
const CONTEXT_LIMIT = Number.parseInt(process.env.CONTEXT_LIMIT || '20', 10);

const openai = process.env.openAIKey ? new OpenAI({apiKey: process.env.openAIKey}) : null;

app.use(express.json());
app.get('/health', (req, res) => {
    res.json({ok: true, timestamp: new Date().toISOString()});
});

app.use(express.static(path.join(__dirname, '..', 'public')));

function mapMessage(doc){
    return{
        id: doc._id.toString(),
        role: doc.role,
        content: doc.content,
        author: doc.author,
        createdAt: doc.createdAt ? doc.createdAt.toISOString() : null,
        updatedAt: doc.updatedAt ? doc.updatedAt.toISOString() : null,
        edited: Boolean(doc.edited)
    };
}

async function loadHistory(limit){
    const collection = await getMessagesCollection();
    const docs = await collection.find({})
        .sort({createdAt: -1})
        .limit(limit)
        .toArray();
    return docs.reverse().map(mapMessage);
}

async function buildContext(limit){
    const collection = await getMessagesCollection();
    const docs = await collection.find({})
        .sort({createdAt: -1})
        .limit(limit)
        .toArray();
    return docsmap((doc) => ({role: doc.role, content: doc.content}));
}

io.on('connection', async (socket) => {
    console.log(`Nuevo usuario conectado: ${socket.id}`);

    try{
        const history = await loadHistory(HISTORY_LIMIT);
        socket.emit('history', history);
    } catch (error){
        console.error('No se pudo cargar el historial', error);
    }

    socket.on('sendMessage', async (payload, callback) => {
        try{
            const content = typeof payload === 'string' ? payload : payload?.content;
            const author = payload?.author || 'Usuario';
            if (!content || !content.trim()){
                if (callback){
                    callback({error: 'Mensaje vacio'});
                }
                return;
            }

            const now = new Date();
            const userMessage = {
                role: 'user',
                content: content.trim(),
                author,
                createdAt: now,
                updatedAt: now,
                edited: false
            };

            const collection = await getMessagesCollection();
            const result = await collection.insertOne(userMessage);
            const savedUserMessage = {...userMessage, _id: result.insertedId};

            io.emit('messageCreated', mapMessage(savedUserMessage));

            if (!openai){
                if (callback){
                    callback();
                }
                return;
            }

            const contextMessages = await buildContext(CONTEXT_LIMIT);
            const response = await openai.chat.completions.create({
                model: OPENAI_MODEL,
                messages: [
                    {role: 'system', content: SYSTEM_PROMPT},
                    ...contextMessages
                ]
            });

            const assistantText = response.choices?.[0]?.message?.content?.trim();
            if (assistantText){
                const assistantMessage = {
                    role: 'assistant',
                    content: assistantText,
                    author: 'ChatGPT',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    edited: false
                };
                const assistantResult = await collection.insertOne(assistantMessage);
                io.emit('messageCreated', mapMessage({...assistantMessage, _id: assistantResult.insertedId}));
            }

            if (callback){
                callback();
            }
        } catch (error){
            console.error('Error enviando mensaje', error);
            if (callback){
                callback({error: 'No se pudo procesar el mensaje'});
            }
        }
    });

    socket.on('editMessage', async (payload, callback) => {
        try{
            const messageId = payload?.id;
            const content = payload?.content;
            if (!messageId || !content || !content.trim()){
                if (callback){
                    callback({error: 'Datos incompletos'});
                }
                return;
            }

            const collection = await getMessagesCollection();
            const objectId = new ObjectId(messageId);
            const existing = await collection.findOne({_id: objectId});

            if (!existing){
                if (callback){
                    callback({error: 'Mensaje no encontrado'});
                }
                return;
            }

            if (existing.role !== 'user'){
                if (callback){
                    callback({error: 'Solo se pueden editar mensajes de usuario'});
                }
                return;
            }

            const now = new Date();
            await collection.updateOne(
                {_id: objectId},
                {$set: {
                    content: content.trim(),
                    updatedAt: now,
                    edited: true
                }}
            );

            io.emit('messageUpdated', {
                id: messageId,
                content: content.trim(),
                edited: true,
                updatedAt: now.toISOString()
            });

            if (callback){
                callback();
            }
        } catch (error){
            console.error('Error editando mensaje', error);
            if (callback) {
                callback({error: 'No se pudo editar el mensaje'});
            }
        }
    });

    socket.on('clearHistory', async (callback) => {
        try{
            const collection = await getMessagesCollection();
            await collection.deleteMany({});
            io.emit('historyCleared');
            if (callback){
                callback();
            }
        } catch (error){
            console.error('Error borrando historial', error);
            if (callback){
                callback({error: 'No se pudo borrar el historial'});
            }
        }
    });

    socket.on('disconnect', () => {
        console.log(`Usuario desconectado: ${socket.id}`);
    });
});

server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
