const http = require('http');
const { handleRequest } = require('./routes/salesRoutes');

/**
 * Servidor Principal
 * Punto de entrada de la aplicación
 */

// Configuración
const PORT = 3000;
const HOST = 'localhost';

// Crear servidor HTTP
const server = http.createServer(handleRequest);

// Iniciar servidor
server.listen(PORT, HOST, () => {
  console.log('╔════════════════════════════════════════════════╗');
  console.log('║                                                ║');
  console.log('║  ✅ Servidor corriendo exitosamente           ║');
  console.log('║                                                ║');
  console.log(`║  🌐 URL: http://${HOST}:${PORT}              ║`);
  console.log('║                                                ║');
  console.log('╚════════════════════════════════════════════════╝');
  console.log('\n📡 Endpoints disponibles:\n');
  console.log('  GET  /api/lista              → Lista todas las ventas');
  console.log('  GET  /api/lista/pendientes   → Lista ventas pendientes');
  console.log('  GET  /api/lista/completados  → Lista ventas completadas');
  console.log('  POST /api/lista              → Crea nueva venta');
  console.log('\n💡 Presiona Ctrl+C para detener el servidor\n');
});

// Manejo de errores del servidor
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`❌ Error: El puerto ${PORT} ya está en uso`);
    process.exit(1);
  } else {
    console.error('❌ Error en el servidor:', error);
  }
});
