const Sale = require('../models/Sale');
const { parseRequestBody } = require('../utils/requestParser');
const { sendJSON } = require('../utils/responseHandler');

/**
 * Controlador de Ventas/Tareas
 * Contiene toda la lógica de negocio para cada endpoint
 */

/**
 * GET /api/lista
 * Obtiene todas las ventas/tareas
 */
const getAllSales = (req, res) => {
  const sales = Sale.getAll();
  sendJSON(res, 200, sales);
};

/**
 * GET /api/lista/pendientes
 * Obtiene solo las ventas/tareas pendientes (esCompletado = false)
 */
const getPendingSales = (req, res) => {
  const pendingSales = Sale.filterByStatus(false);
  sendJSON(res, 200, pendingSales);
};

/**
 * GET /api/lista/completados
 * Obtiene solo las ventas/tareas completadas (esCompletado = true)
 */
const getCompletedSales = (req, res) => {
  const completedSales = Sale.filterByStatus(true);
  sendJSON(res, 200, completedSales);
};

/**
 * POST /api/lista
 * Crea una nueva venta/tarea
 */
const createSale = async (req, res) => {
  try {
    // Parsear el body de la petición
    const body = await parseRequestBody(req);

    // Validar los datos
    const validation = Sale.validate(body);
    
    if (!validation.valid) {
      return sendJSON(res, 400, { message: validation.message });
    }

    // Crear la nueva venta
    const newSale = Sale.create(body);

    // Responder con la venta creada
    sendJSON(res, 201, newSale);

  } catch (error) {
    // Manejar errores (JSON inválido, etc.)
    sendJSON(res, 400, { message: 'Invalid JSON' });
  }
};

module.exports = {
  getAllSales,
  getPendingSales,
  getCompletedSales,
  createSale
};
