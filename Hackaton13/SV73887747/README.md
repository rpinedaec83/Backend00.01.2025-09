# Hackatón 13: API Express Pro

## Endpoints
- GET /api/v1/orders: Lista orders.
- POST /api/v1/orders: Crea order (body: {item, amount}, header: idempotency-key).
- POST /api/v1/orders/upload-receipt: Upload file (form-data: receipt).

## Ejecutar
npm install  
npm run dev  

Swagger: /api-docs