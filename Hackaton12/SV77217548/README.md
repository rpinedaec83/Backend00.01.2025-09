# Hackaton12 - API de Gestión de Ventas

## Requisitos
- Node.js 18+

## Cómo ejecutar
```bash
node server.js
```
El servidor arranca por defecto en `http://localhost:3000` (puedes cambiar el puerto con la variable de entorno `PORT`).

## Endpoints disponibles (v0.1)
- `GET /api/lista` devuelve el arreglo `listSales` en memoria (inicia vacío).

Para cualquier otra ruta la API responde JSON con `404` y `{"message": "endpoint not found"}`.
