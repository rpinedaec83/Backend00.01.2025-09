# Hackaton09 - v0.1
Inicio del proyecto.

## Qué incluye
- Express con endpoint `/health`.
- Carga de variables con `dotenv`.
- Scripts `npm start` y `npm run dev` (con `nodemon`).

## Cómo probar
```bash
npm install
cp .env.example .env   # opcional, solo para cambiar el puerto
npm run dev            # o npm start
# Ahora en otra terminal prueba:
curl http://localhost:3000/health
```
Deberías recibir:
```json
{ "ok": true, "timestamp": "..." }
```
