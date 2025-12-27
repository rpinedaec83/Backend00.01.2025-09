# Updates

## v0.1
- Express app base y punto de entrada del servidor.
- Middlewares: logger (method/route/duration), requireJson, error handler, async wrapper.
- Rutas: `GET /api/health`, `POST /api/data`.

## v0.2
- Router versionado con `/api/v1`.
- Usuarios: listado, creación con validación y detalle por id.
- Ordenes: rutas protegidas por header `x-token`, creación con validación y listado con paginación/filtros.
- Exportación CSV por streaming en `GET /api/v1/orders/export`.
