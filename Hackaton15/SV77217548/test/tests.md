# Tests

## v0.1
1. Instalar dependencias:
   - `npm install`
2. Configurar entorno:
   - Copiar `.env.example` a `.env`.
   - Ajustar `DATABASE_URL` si se usa otra base.
3. Iniciar servidor:
   - `npm run dev`
4. Registrar usuario:
   - `curl.exe -X POST http://localhost:3000/session/register -H "Content-Type: application/json" -d "{\"email\":\"demo@correo.com\",\"password\":\"secret123\",\"role\":\"user\"}"`
5. Login y guardar cookie:
   - `curl.exe -c cookies.txt -X POST http://localhost:3000/session/login -H "Content-Type: application/json" -d "{\"email\":\"demo@correo.com\",\"password\":\"secret123\"}"`
6. Ver sesion activa:
   - `curl.exe -b cookies.txt http://localhost:3000/me`
7. Acceder a ruta privada:
   - `curl.exe -b cookies.txt http://localhost:3000/private/profile`
8. Logout:
   - `curl.exe -b cookies.txt -X POST http://localhost:3000/session/logout`
9. Verificar sesion cerrada:
   - `curl.exe -b cookies.txt http://localhost:3000/me`
