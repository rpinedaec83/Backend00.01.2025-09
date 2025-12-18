# Hackaton12 - API de Gestión de Ventas

## Requisitos
- Node.js 18+

## Cómo ejecutar
```bash
node server.js
```
El servidor arranca por defecto en `http://localhost:3000` (puedes cambiar el puerto con la variable de entorno `PORT`).

## Endpoints (v0.2)
- `GET /api/lista` -> devuelve todo el arreglo `listSales`.
- `GET /api/lista/pendientes` -> filtra items con `esCompletado === false`.
- `GET /api/lista/completados` -> filtra items con `esCompletado === true`.
- `POST /api/lista` -> crea un registro en memoria.
  - Body ejemplo:
    ```json
    {
      "name": "Venta 1",
      "description": "Productos 1",
      "date": "2025-12-18",
      "esCompletado": true
    }
    ```
  - Validacion: `name`, `description`, `date` deben ser `string`; `esCompletado` debe ser `boolean`.
  - Respuestas:
    - 201 con el item creado.
    - 400 `{"message": "faltan campos"}` si hay campos faltantes o tipos incorrectos.
    - 400 `{"message": "invalid json"}` si el body no es JSON valido.

Rutas inexistentes responden 404 `{"message": "endpoint not found"}`.
