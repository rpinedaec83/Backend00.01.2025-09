console.log("Inicio de la aplicacion");

const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const rateLimit = require('express-rate-limit');
const limit = rateLimit({windowMs:15 * 60 * 1000,max:100});
const error = require('./middlewares/error');

const connectDB = require('./db');


const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(morgan('dev'));
app.use(limit);
app.use(error);

app.get('/',(req,res)=>{
    res.send({message:"ok"})
})

connectDB().then(
app.listen(PORT, ()=>{
    console.log(`Servicio escuchando el puerto ${PORT}`)
})).catch(error=>{
    console.error(error)
})
