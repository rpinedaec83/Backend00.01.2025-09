const http = require('node:http');

const listSales = [];

const sendJson = (res, statusCode, payload) => {
    res.writeHead(statusCode, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(payload));
};

const server = http.createServer((req, res) => {
    const {method, url} = req;
    if (method === 'GET' && url === '/api/lista'){
        return sendJson(res, 200, listSales);
    }
    return sendJson(res, 404, {message: 'endpoint not founnd'});
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
