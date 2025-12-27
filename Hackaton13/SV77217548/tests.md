# Tests

## v0.1
1. Instalar dependencias:
   - `npm install`
2. Correr servidor:
   - `npm run dev`
3. Health:
   - `curl.exe http://localhost:8080/api/health`
   - Respuesta esperada: `{"status": "ok"}`
4. Data con JSON:
   - `curl.exe -X POST http://localhost:8080/api/data -H "Content-Type: application/json" -d '{"sample":true}'`
   - Respuesta esperada: `{"received": true}`
5. Data sin JSON (va a fallar):
   - `curl.exe -X POST http://localhost:8080/api/data -d '{"sample":true}'`
   - Respuesta esperada: 415 con mensaje sobre el Content-Type.
