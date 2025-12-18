const http = require('node:http');

const listSales = [];

const sendJson = (res, statusCode, payload) => {
    res.writeHead(statusCode, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(payload));
};

const getJsonBody = (req) =>
    new Promise((resolve, reject) => {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            if (!body) return resolve({});
            try{
                const parsed = JSON.parse(body);
                return resolve(parsed);
            } catch (error){
                return reject(error);
            }
        });

        req.on('error', reject);
  });

const server = http.createServer((req, res) => {
    const {method, url} = req;
    if (method === 'GET' && url === '/api/lista'){
        return sendJson(res, 200, listSales);
    }

    if (method === 'GET' && url === '/api/lista/pendientes'){
        const pendientes = listSales.filter((item) => item.esCompletado === false);
        return sendJson(res, 200, pendientes);
    }

    if (method === 'GET' && url === '/api/lista/completados'){
        const completados = listSales.filter((item) => item.esCompletado === true);
        return sendJson(res, 200, completados);
    }

    if (method === 'POST' && url === '/api/lista'){
        return getJsonBody(req)
            .then((body) => {
                const {name, description, date, esCompletado} = body;
                const faltaCampo =
                    typeof name !== 'string' ||
                    typeof description !== 'string' ||
                    typeof date !== 'string' ||
                    typeof esCompletado !== 'boolean';

                if (faltaCampo){
                    return sendJson(res, 400, {message: 'faltan campos'});
                }
                const newItem = {name, description, date, esCompletado};
                listSales.push(newItem);
                return sendJson(res, 201, newItem);
            })
            .catch(() => sendJson(res, 400, {message: 'invalid json'}));
    }
    return sendJson(res, 404, {message: 'endpoint not found'});
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
