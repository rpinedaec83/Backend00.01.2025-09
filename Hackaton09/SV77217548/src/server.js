console.log("Inicio de la aplicacion")

require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_HOST = process.env.DB_HOST;
console.log(DB_HOST);

app.use(express.json());

app.get('/health', (req, res) => {
    res.json({ok: true, timestamp: new Date().toISOString()});
});

app.listen(PORT, () => {
    console.log(`API lista en http://${DB_HOST}:${PORT}`);
});
