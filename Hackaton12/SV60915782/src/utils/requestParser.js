/**
 * Utilidad para parsear el body de las peticiones POST
 */

/**
 * Lee y parsea el body de una petición HTTP
 * @param {Object} req - Request object de Node.js
 * @returns {Promise<Object>} - Body parseado como JSON
 */
const parseRequestBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = '';

    // Escuchar datos que van llegando
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    // Cuando termina de llegar la data
    req.on('end', () => {
      try {
        // Intentar parsear como JSON
        const parsedBody = body ? JSON.parse(body) : {};
        resolve(parsedBody);
      } catch (error) {
        // Si el JSON es inválido
        reject(new Error('Invalid JSON'));
      }
    });

    // Manejar errores de la request
    req.on('error', (error) => {
      reject(error);
    });
  });
};

module.exports = { parseRequestBody };
