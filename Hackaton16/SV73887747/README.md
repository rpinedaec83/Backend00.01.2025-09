# Hackathon 16 - Chat con Google OAuth, Socket.io y MySQL

## Tecnologías
- Node.js + Express + TypeScript
- Socket.io (chat real time)
- Passport + Google OAuth 2.0
- MySQL (Docker local)
- Despliegue: Docker + Render (con PostgreSQL en producción)

## Instalación local
1. cp .env.sample .env (completa con claves Google)
2. docker-compose up --build
3. Abre http://localhost:3000

## Despliegue en Render
1. Push a GitHub
2. En Render: New Web Service → GitHub repo
3. Build: `npm install && npm run build`
4. Start: `npm start`
5. Agrega env vars en Render (CLIENTID, etc.)
6. Crea PostgreSQL en Render y cambia conexión a pg (para producción)

## Notas
Para producción, migrar DB a PostgreSQL (Render gratis). Local usa MySQL Docker.