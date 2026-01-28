const http = require('http');
const url = require('url');

let lista = [];
let id = 1;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'POST' && pathname === '/crear') {
    let body = '';

    req.on('data', chunk => body += chunk.toString());

    req.on('end', () => {
      const { nombre, descripcion, fecha } = JSON.parse(body);

      const item = {
        id: id++,
        nombre,
        descripcion,
        fecha,
        esCompletado: false
      };

      lista.push(item);
      res.end(JSON.stringify(item));
    });
  }

  else if (req.method === 'GET' && pathname === '/pendientes') {
    res.end(JSON.stringify(lista.filter(i => !i.esCompletado)));
  }

  else if (req.method === 'GET' && pathname === '/completados') {
    res.end(JSON.stringify(lista.filter(i => i.esCompletado)));
  }

  else if (req.method === 'PUT' && pathname === '/completar') {
    const item = lista.find(i => i.id == query.id);

    if (!item) {
      res.statusCode = 404;
      return res.end(JSON.stringify({ error: 'Item no encontrado' }));
    }

    item.esCompletado = true;
    res.end(JSON.stringify(item));
  }

  else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Ruta no válida' }));
  }
});

server.listen(3000, () => {
  console.log('Servidor activo en http://localhost:3000');
});
