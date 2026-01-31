/**
 * Utilidad para enviar respuestas HTTP en formato JSON
 */

/**
 * Envía una respuesta JSON con el status code y data especificados
 * @param {Object} res - Response object de Node.js
 * @param {number} statusCode - Código de estado HTTP
 * @param {Object} data - Datos a enviar en formato JSON
 */
const sendJSON = (res, statusCode, data) => {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json'
  });
  res.end(JSON.stringify(data));
};

module.exports = { sendJSON };
