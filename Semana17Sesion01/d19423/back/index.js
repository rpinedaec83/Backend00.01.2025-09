const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 8080;
const STRIPETOKEN = process.env.STRIPETOKEN;


const stripe= require('stripe')(STRIPETOKEN);


const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hola desde el back')
})


app.post('/api/create-checkout-session',async(req,res)=>{
    console.log(req.body);
    const {product} = req.body;

    res.json({msg:'ok'})
})


app.listen(PORT,()=>{
    console.log(`Servidor escuchando el puerto ${PORT}`)
})