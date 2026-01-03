# Tests

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
