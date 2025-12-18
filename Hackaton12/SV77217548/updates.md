## v0.2 - Endpoints requeridos
- Se implementa `GET /api/lista/pendientes` y `GET /api/lista/completados` filtrando por `esCompletado`.
- Se implementa `POST /api/lista` con validación de tipos para `name`, `description`, `date` y `esCompletado`.
- Manejo de JSON inválido con respuesta 400 `{"message": "invalid json"}` y 400 `{"message": "faltan campos"}` cuando faltan campos o tipos.

## v0.1 - Inicio de Hackaton
- Servidor HTTP básico con `GET /api/lista` que devuelve `listSales`.
- Respuesta JSON con `404` y mensaje `{"message": "endpoint not found"}` para rutas inexistentes.
- Documento de ejecución y alcance actual en `README.md`.
