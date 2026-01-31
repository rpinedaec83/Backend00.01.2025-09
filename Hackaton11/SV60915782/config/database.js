const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TU_CODIGO_ALUMNO', {
      // Opciones de conexión (muchas ya son default en versiones nuevas)
    });

    console.log(`✅ MongoDB Conectado: ${conn.connection.host}`);
    console.log(`📦 Base de Datos: ${conn.connection.name}`);
    
    return conn;
  } catch (error) {
    console.error(`❌ Error de conexión: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;