# Hackaton14 - Chat persistente con MongoDB y ChatGPT

## Requisitos
- Node.js 18+
- MongoDB Atlas
- API Key de OpenAI

## Configuracion
1. Copia `.env.example` a `.env`.
2. Ajusta las variables:
   - `MONGOURI`
   - `DB_NAME` (usa `sv77217548_h14`)
   - `MESSAGES_COLLECTION` (opcional)
   - `openAIKey`
   - `openAIModel`
   - `HISTORY_LIMIT` y `CONTEXT_LIMIT`
   - `SYSTEM_PROMPT`

## Scripts
- `npm install`
- `npm run dev`
- `npm start`

## Uso
- Abre `http://localhost:8080`.
- Envia mensajes para verlos en tiempo real.
- Usa **Editar** para cambiar un mensaje enviado.
- Usa **Borrar historial** para limpiar la conversacion.
- Health check: `GET /health`.

## Notas
- Los mensajes se guardan en la coleccion `messages` dentro de `sv77217548_h14`.
- Si `openAIKey` no esta configurada, el chat funciona sin respuesta del bot.