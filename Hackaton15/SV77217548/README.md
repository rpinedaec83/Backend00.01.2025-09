# Hackaton15 - Autenticacion y sesiones (sv77217548)

API REST en TypeScript + Express + MongoDB para autenticacion basada en sesion.

## Requisitos
- Node 18+
- MongoDB local o Atlas

## Instalacion y ejecucion
```bash
cd Hackaton15/SV77217548
npm install
cp .env.example .env
npm run dev
```
La API levanta en `http://localhost:3000` por defecto.

## Variables de entorno
```env
PORT=3000
NODE_ENV=development
SESSION_SECRET=session-secreto-cambiar
DATABASE_URL=mongodb://127.0.0.1:27017/sv77217548_h15
JWT_ACCESS_SECRET=access-secreto-cambiar
JWT_REFRESH_SECRET=refresh-secreto-cambiar
ACCESS_TTL=10m
REFRESH_TTL=7d
```

## Endpoints
- `POST /session/register` crear usuario (email, password, role opcional).
- `POST /session/login` iniciar sesion.
- `POST /session/logout` cerrar sesion.
- `GET /me` datos de sesion actual.
- `GET /private/profile` ruta protegida.
- `POST /jwt/login` login con JWT (access en body, refresh en cookie).
- `POST /jwt/refresh` rota refresh token y entrega nuevo access.
- `POST /jwt/logout` revoca refresh token.
- `GET /jwt/me` datos del usuario autenticado con access token.

## Body de ejemplo (registro)
```json
{
  "email": "demo@correo.com",
  "password": "secret123",
  "role": "user"
}
```

## Notas
- La cookie de sesion se llama `sid`.
- La cookie de refresh token se llama `refreshToken`.
- Para `GET /jwt/me` usa header `Authorization: Bearer <accessToken>`.

## Tests
- Ver pasos en `test/tests.md`.

## Archivos de soporte
- `updates.md` registro de versiones.
