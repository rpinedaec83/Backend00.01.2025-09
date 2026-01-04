# Tests

## v0.2
1. Instalar dependencias:
   - `npm install`
2. Configurar entorno:
   - Copia `.env.example` a `.env`.
   - Ajusta `MONGOURI`, `DB_NAME`, `JWT_SECRET` y `openAIKey`.
3. Iniciar servidor:
   - `npm run dev`
4. Registro por API:
   - `curl.exe -X POST http://localhost:8080/api/auth/register -H "Content-Type: application/json" -d "{\"username\":\"rony\",\"password\":\"secret123\"}"`
5. Login por API:
   - `curl.exe -X POST http://localhost:8080/api/auth/login -H "Content-Type: application/json" -d "{\"username\":\"rony\",\"password\":\"secret123\"}"`
6. UI con login:
   - Abre `http://localhost:8080` y registra o inicia sesion.
   - Debes ver el chat luego de autenticarte.
7. Mensajes por usuario:
   - Abre otra ventana, ingresa con otro usuario distinto.
   - Envia mensajes en ambas sesiones.
   - Cada usuario solo debe ver su propio historial.
8. Editar mensaje con otro usuario:
   - Abre otra ventana, crea otro usuario y envia un mensaje.
   - Intenta editar ese mensaje desde el primer usuario.
   - Respuesta esperada: alerta con “No es el usuario correspondiente al mensaje”.

## v0.1
1. Instalar dependencias:
   - `npm install`
2. Configurar entorno:
   - Copia `.env.example` a `.env`.
   - Ajusta `MONGOURI`, `DB_NAME` y `openAIKey`.
3. Iniciar servidor:
   - `npm run dev`
4. Abrir la UI:
   - Navega a `http://localhost:8080`.
   - Envia un mensaje y verifica que aparece en la lista.
5. Persistencia:
   - Abre otra ventana del navegador o recarga la pagina.
   - Debes ver el historial cargado.
6. Editar mensaje:
   - Presiona **Editar** en un mensaje de usuario y cambia el texto.
   - El mensaje debe actualizarse en todas las ventanas.
7. Borrar historial:
   - Presiona **Borrar historial**.
   - La lista debe quedar vacia para todos.
8. Health check:
   - `curl.exe http://localhost:8080/health`
   - Respuesta esperada: `{ "ok": true, "timestamp": "..." }`.
