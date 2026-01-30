# 🔐 Sistema de Autenticación - Hackathon 14

Sistema completo de autenticación con **Express.js** que implementa dos estrategias: **Sesiones con Cookies** y **JWT (JSON Web Tokens)** con todas las medidas de seguridad profesionales.

## 🎯 Características

### Autenticación Dual
- ✅ **Sesiones**: Cookies HttpOnly con MongoDB Store
- ✅ **JWT**: Access Token (10min) + Refresh Token (7 días)

### Seguridad
- 🛡️ Helmet (headers HTTP seguros)
- 🚦 Rate Limiting (anti brute-force)
- 🔒 Cookies: HttpOnly, SameSite, Secure
- 🔄 Session Fixation Prevention
- 🔑 CSRF Protection (para sesiones)
- 🚫 Account Lockout (5 intentos fallidos)
- 🔐 Bcrypt para passwords
- ♻️ Refresh Token Rotation

### Control de Acceso
- 👥 RBAC (Role-Based Access Control)
- 🎭 Roles: `admin` y `user`
- 🔐 Middlewares de autorización

---

## 📋 Requisitos Previos

- Node.js 18 o superior
- MongoDB Atlas (o MongoDB local)
- npm o pnpm

---

## 🚀 Instalación

### 1. Clonar e instalar dependencias
```bash
git clone <tu-repo>
cd hackathon-auth
npm install
```

### 2. Configurar variables de entorno

Copia `.env.example` a `.env` y configura tus valores:
```bash
cp .env.example .env
```

Edita `.env` con tus credenciales de MongoDB Atlas:
```env
PORT=3000
NODE_ENV=development

SESSION_SECRET=super-secret-change-this-in-production-min-32-chars-long
JWT_ACCESS_SECRET=access-secret-change-this-strong-key-min-32-chars
JWT_REFRESH_SECRET=refresh-secret-change-this-different-key-min-32
ACCESS_TTL=10m
REFRESH_TTL=7d

DATABASE_URL=mongodb+srv://usuario:password@cluster.mongodb.net/hackathon_auth?retryWrites=true&w=majority

CSRF_SECRET=csrf-secret-change-this-token-min-32-chars
CORS_ORIGIN=http://localhost:3000
```

### 3. Crear usuarios de prueba
```bash
npm run seed
```

Esto creará 3 usuarios:
- **Admin**: `admin@test.com` / `admin123`
- **User**: `user@test.com` / `user123`
- **Test**: `test@test.com` / `test123`

### 4. Iniciar servidor

**Desarrollo (con hot-reload):**
```bash
npm run dev
```

**Producción:**
```bash
npm start
```

El servidor estará en: `http://localhost:3000`

---

## 📡 Endpoints Disponibles

### 🔓 Públicos

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/` | Información de la API |

### 🍪 Autenticación con Sesión

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/session/register` | Registrar usuario |
| POST | `/session/login` | Login (crea cookie) |
| POST | `/session/logout` | Logout (destruye sesión) |
| GET | `/session/me` | Perfil del usuario actual |

### 🎫 Autenticación con JWT

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/jwt/register` | Registrar usuario |
| POST | `/jwt/login` | Login (retorna access + refresh) |
| POST | `/jwt/refresh` | Renovar access token |
| POST | `/jwt/logout` | Logout (revoca refresh) |
| GET | `/jwt/me` | Perfil del usuario (requiere Bearer) |

### 🔒 Rutas Protegidas

| Método | Ruta | Requiere | Descripción |
|--------|------|----------|-------------|
| GET | `/private/profile` | Auth | Perfil (sesión o JWT) |
| GET | `/admin/stats` | Admin + Sesión | Panel admin |
| GET | `/admin/users` | Admin + JWT | Lista usuarios |
| GET | `/orders/:id` | User/Admin + JWT | Detalle orden |

---

## 🧪 Pruebas con Postman

### Importar Colección

1. Abre Postman
2. Click en **Import**
3. Selecciona el archivo `postman_collection.json`
4. Las variables de entorno ya están configuradas

### Flujo de Prueba - Sesión
```
1. POST /session/register → Crear usuario
2. POST /session/login → Login (cookie automática)
3. GET /session/me → Ver perfil
4. GET /admin/stats → Acceder como admin
5. POST /session/logout → Cerrar sesión
```

### Flujo de Prueba - JWT
```
1. POST /jwt/register → Crear usuario
2. POST /jwt/login → Login (copiar accessToken)
3. GET /jwt/me → Ver perfil (Header: Bearer {token})
4. POST /jwt/refresh → Renovar token
5. POST /jwt/logout → Cerrar sesión
```

---

## 🏗️ Estructura del Proyecto
```
hackathon-auth/
├── src/
│   ├── app.js                    # Configuración Express
│   ├── server.js                 # Punto de entrada
│   ├── config/
│   │   ├── env.js                # Variables de entorno
│   │   └── session.js            # Configuración sesión
│   ├── db/
│   │   └── index.js              # Conexión MongoDB
│   ├── middleware/
│   │   ├── authSession.js        # Middleware sesión
│   │   ├── authJwt.js            # Middleware JWT
│   │   ├── requireRole.js        # Guard de roles
│   │   └── csrf.js               # Middleware CSRF
│   ├── models/
│   │   ├── User.js               # Modelo usuario
│   │   └── RefreshToken.js       # Modelo tokens
│   ├── routes/
│   │   ├── authSession.routes.js # Rutas sesión
│   │   ├── authJwt.routes.js     # Rutas JWT
│   │   └── private.routes.js     # Rutas protegidas
│   ├── services/
│   │   ├── user.service.js       # Lógica usuarios
│   │   └── token.service.js      # Lógica tokens
│   ├── utils/
│   │   ├── passwords.js          # Bcrypt helpers
│   │   └── tokens.js             # JWT helpers
│   └── scripts/
│       └── seed.js               # Seed usuarios
├── package.json
├── .env
├── .env.example
├── .gitignore
└── README.md
```

---

## 🔐 Medidas de Seguridad Implementadas

### Cookies y Sesiones
- ✅ `httpOnly: true` - No accesible desde JavaScript
- ✅ `sameSite: 'lax'/'strict'` - Protección CSRF
- ✅ `secure: true` - Solo HTTPS en producción
- ✅ Session Regeneration - Prevenir fixation
- ✅ MongoDB Store - Persistencia

### JWT
- ✅ Access Token corto (10 min)
- ✅ Refresh Token largo (7 días)
- ✅ Rotación de Refresh Token
- ✅ Revocación en logout
- ✅ JTI único por token
- ✅ Cookie HttpOnly para refresh

### Passwords
- ✅ Bcrypt con 10 salt rounds
- ✅ Nunca se retorna el hash
- ✅ Account lockout (5 intentos)
- ✅ Cooldown de 15 minutos

### Headers y Límites
- ✅ Helmet (headers seguros)
- ✅ Rate Limiting general (100 req/15min)
- ✅ Rate Limiting login (5 req/15min)
- ✅ CORS configurado

---

## 📊 Diagrama de Flujos

### Flujo de Sesión
```
Cliente                     Servidor                    MongoDB
  |                            |                            |
  |--- POST /session/login --->|                            |
  |    {email, password}       |                            |
  |                            |--- Validar credenciales -->|
  |                            |<-- Usuario encontrado -----|
  |                            |                            |
  |                            |--- Regenerar sesión ------>|
  |                            |--- Guardar session ------->|
  |<-- Cookie: sid=xxx --------|                            |
  |                            |                            |
  |--- GET /session/me ------->|                            |
  |    Cookie: sid=xxx         |                            |
  |                            |--- Buscar sesión --------->|
  |                            |<-- Datos sesión -----------|
  |<-- {user: {...}} ----------|                            |
```

### Flujo de JWT
```
Cliente                     Servidor                    MongoDB
  |                            |                            |
  |--- POST /jwt/login ------->|                            |
  |    {email, password}       |                            |
  |                            |--- Validar credenciales -->|
  |                            |<-- Usuario encontrado -----|
  |                            |                            |
  |                            |--- Generar tokens -------->|
  |                            |    (access + refresh)      |
  |<-- {accessToken} ----------|                            |
  |    Cookie: refreshToken    |                            |
  |                            |                            |
  |--- GET /jwt/me ----------->|                            |
  |    Bearer: accessToken     |                            |
  |                            |--- Verificar firma         |
  |<-- {user: {...}} ----------|                            |
  |                            |                            |
  |--- POST /jwt/refresh ----->|                            |
  |    Cookie: refreshToken    |                            |
  |                            |--- Verificar + Revocar --->|
  |                            |--- Crear nuevo par ------->|
  |<-- {accessToken} ----------|                            |
  |    Cookie: nuevo refresh   |                            |
```

---

## 🎓 Conceptos Implementados

### Session Fixation Prevention
Al hacer login exitoso, se regenera el `session ID` para prevenir ataques de fijación.

### Refresh Token Rotation
Cada vez que se usa un refresh token, se revoca el anterior y se emite uno nuevo.

### Account Lockout
Después de 5 intentos fallidos de login, la cuenta se bloquea por 15 minutos.

### Rate Limiting
- General: 100 requests / 15 minutos
- Login: 5 intentos / 15 minutos

### RBAC (Role-Based Access Control)
Control de acceso basado en roles (`admin`, `user`) usando middlewares.

---

## 🐛 Troubleshooting

### Error: MongoDB connection failed
- Verifica tu `DATABASE_URL` en `.env`
- Asegúrate de tener acceso a Internet
- Verifica las credenciales de MongoDB Atlas

### Error: Cannot find module
- Ejecuta `npm install`
- Verifica que todos los archivos estén creados

### Error: Port already in use
- Cambia el `PORT` en `.env`
- O mata el proceso: `npx kill-port 3000`

---

## 📝 Scripts Disponibles
```bash
npm run dev      # Modo desarrollo con hot-reload
npm start        # Modo producción
npm run seed     # Crear usuarios de prueba
npm test         # Ejecutar tests (pendiente)
```

---

## 🏆 Checklist de Entrega

- [x] Autenticación por sesión funcional
- [x] Autenticación por JWT funcional
- [x] Refresh token rotation
- [x] Session fixation prevention
- [x] Rate limiting configurado
- [x] Helmet activado
- [x] RBAC implementado
- [x] Account lockout
- [x] Cookies seguras (HttpOnly, SameSite, Secure)
- [x] MongoDB como session store
- [x] Seed de usuarios
- [x] README completo
- [ ] Colección Postman
- [ ] Tests automatizados

---

## 🚀 Próximos Pasos (Opcionales)

- [ ] Tests con Jest + Supertest
- [ ] 2FA con TOTP (Google Authenticator)
- [ ] Redis como session store
- [ ] Blacklist de access tokens
- [ ] Auditoría de eventos (login_success, login_failed)
- [ ] Remember me functionality

---

## 👨‍💻 Autor

Desarrollado para Hackathon 14 - Autenticación Profesional

---

## 📄 Licencia

ISC