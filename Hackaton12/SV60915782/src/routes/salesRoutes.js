const {
  getAllSales,
  getPendingSales,
  getCompletedSales,
  createSale
} = require('../controllers/salesController');
const { sendJSON } = require('../utils/responseHandler');

/**
 * Router de Ventas/Tareas
 * Maneja el enrutamiento de todas las peticiones
 */

/**
 * Maneja todas las peticiones entrantes y las dirige al controlador apropiado
 */
const handleRequest = async (req, res) => {
  const { method, url } = req;

  // GET /api/lista - Obtener todas las ventas
  if (method === 'GET' && url === '/api/lista') {
    return getAllSales(req, res);
  }

  // GET /api/lista/pendientes - Obtener ventas pendientes
  if (method === 'GET' && url === '/api/lista/pendientes') {
    return getPendingSales(req, res);
  }

  // GET /api/lista/completados - Obtener ventas completadas
  if (method === 'GET' && url === '/api/lista/completados') {
    return getCompletedSales(req, res);
  }

  // POST /api/lista - Crear nueva venta
  if (method === 'POST' && url === '/api/lista') {
    return createSale(req, res);
  }

  // Ruta no encontrada (404)
  sendJSON(res, 404, { message: 'endpoint not found' });
};

module.exports = { handleRequest };
