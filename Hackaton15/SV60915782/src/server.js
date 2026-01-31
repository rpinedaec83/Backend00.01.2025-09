import { app } from './app.js';
import { connectDB } from './db/index.js';
import { config } from './config/env.js';

const PORT = config.port;

// Conectar a la base de datos y luego iniciar servidor
const startServer = async () => {
  try {
    await connectDB();
    
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
      console.log(`📝 Ambiente: ${config.nodeEnv}`);
      console.log(`🔐 Seguridad activada: Helmet, Rate Limiting, CORS`);
    });
  } catch (error) {
    console.error('❌ Error al iniciar servidor:', error);
    process.exit(1);
  }
};

startServer();