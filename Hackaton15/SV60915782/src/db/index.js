import mongoose from 'mongoose';
import { config } from '../config/env.js';

export const connectDB = async () => {
  try {
    await mongoose.connect(config.database.url);
    console.log('✅ MongoDB conectado exitosamente');
  } catch (error) {
    console.error('❌ Error al conectar MongoDB:', error.message);
    process.exit(1);
  }
};

// Eventos de conexión
mongoose.connection.on('disconnected', () => {
  console.log('⚠️  MongoDB desconectado');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ Error en MongoDB:', err);
});