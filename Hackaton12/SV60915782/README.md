# 🚀 API REST - Sistema de Ventas/Tareas

API REST construida con **Node.js puro** (solo `node:http`, sin frameworks) para administrar una lista de ventas/tareas. Implementa arquitectura MVC con separación de responsabilidades.

## 📁 Estructura del Proyecto

```
api-ventas-tareas/
│
├── src/
│   ├── controllers/
│   │   └── salesController.js      # Lógica de negocio
│   │
│   ├── models/
│   │   └── Sale.js                 # Modelo de datos y validaciones
│   │
│   ├── routes/
│   │   └── salesRoutes.js          # Enrutamiento de peticiones
│   │
│   ├── utils/
│   │   ├── responseHandler.js      # Utilidad para respuestas JSON
│   │   └── requestParser.js        # Parseo de body POST
│   │
│   └── server.js                   # Punto de entrada principal
│
├── package.json
├── .gitignore
└── README.md
```

## 🛠️ Instalación y Configuración

### Paso 1: Verificar Node.js
```bash
node --version
# Debe ser v14 o superior
```

### Paso 2: Navegar al proyecto
```bash
cd api-ventas-tareas
```

### Paso 3: Inicializar npm (si es necesario)
```bash
npm init -y
# Este paso ya está hecho si usas el package.json incluido
```

### Paso 4: Iniciar el servidor
```bash
npm start
```

O si tienes Node.js v18+, usa modo watch (auto-reload):
```bash
npm run dev
```

Deberías ver:
```
╔════════════════════════════════════════════════╗
║                                                ║
║  ✅ Servidor corriendo exitosamente           ║
║                                                ║
║  🌐 URL: http://localhost:3000                ║
║                                                ║
╚════════════════════════════════════════════════╝

📡 Endpoints disponibles:

  GET  /api/lista              → Lista todas las ventas
  GET  /api/lista/pendientes   → Lista ventas pendientes
  GET  /api/lista/completados  → Lista ventas completadas
  POST /api/lista              → Crea nueva venta
```

## 📡 Documentación de Endpoints

### 1. `GET /api/lista`
Obtiene todas las ventas/tareas.

**Request:**
```bash
curl http://localhost:3000/api/lista
```

**Response (200):**
```json
[
  {
    "name": "Venta A",
    "description": "Cliente X",
    "date": "2025-12-17",
    "esCompletado": false
  },
  {
    "name": "Venta B",
    "description": "Cliente Y",
    "date": "2025-12-18",
    "esCompletado": true
  }
]
```

---

### 2. `GET /api/lista/pendientes`
Obtiene solo las ventas/tareas con `esCompletado: false`.

**Request:**
```bash
curl http://localhost:3000/api/lista/pendientes
```

**Response (200):**
```json
[
  {
    "name": "Venta A",
    "description": "Cliente X",
    "date": "2025-12-17",
    "esCompletado": false
  }
]
```

---

### 3. `GET /api/lista/completados`
Obtiene solo las ventas/tareas con `esCompletado: true`.

**Request:**
```bash
curl http://localhost:3000/api/lista/completados
```

**Response (200):**
```json
[
  {
    "name": "Venta B",
    "description": "Cliente Y",
    "date": "2025-12-18",
    "esCompletado": true
  }
]
```

---

### 4. `POST /api/lista`
Crea una nueva venta/tarea.

**Request:**
```bash
curl -X POST http://localhost:3000/api/lista \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Venta Nueva",
    "description": "Cliente Z",
    "date": "2025-12-19",
    "esCompletado": false
  }'
```

**Response exitosa (201):**
```json
{
  "name": "Venta Nueva",
  "description": "Cliente Z",
  "date": "2025-12-19",
  "esCompletado": false
}
```

**Response de error (400):**
```json
{
  "message": "faltan campos"
}
```

---

## ✅ Validaciones Implementadas

El endpoint `POST /api/lista` valida:

1. **Campo `name`**: Requerido, no puede estar vacío
2. **Campo `description`**: Requerido, no puede estar vacío
3. **Campo `date`**: Requerido, no puede estar vacío
4. **Campo `esCompletado`**: Requerido, **debe ser boolean**

⚠️ **Importante**: La validación de `esCompletado` usa `typeof esCompletado !== 'boolean'` para que valores `false` sean aceptados correctamente.

**Ejemplos de validación:**

❌ **Falla** (falta campo):
```json
{
  "name": "Venta",
  "description": "Test"
}
```

❌ **Falla** (esCompletado no es boolean):
```json
{
  "name": "Venta",
  "description": "Test",
  "date": "2025-12-20",
  "esCompletado": "si"
}
```

✅ **Éxito** (todos los campos correctos):
```json
{
  "name": "Venta",
  "description": "Test",
  "date": "2025-12-20",
  "esCompletado": false
}
```

---

## 🧪 Pruebas Rápidas

### Secuencia de prueba completa:

```bash
# 1. Ver lista vacía
curl http://localhost:3000/api/lista

# 2. Crear venta pendiente
curl -X POST http://localhost:3000/api/lista \
  -H "Content-Type: application/json" \
  -d '{"name":"Venta A","description":"Cliente X","date":"2025-12-17","esCompletado":false}'

# 3. Crear venta completada
curl -X POST http://localhost:3000/api/lista \
  -H "Content-Type: application/json" \
  -d '{"name":"Venta B","description":"Cliente Y","date":"2025-12-18","esCompletado":true}'

# 4. Ver toda la lista
curl http://localhost:3000/api/lista

# 5. Ver solo pendientes
curl http://localhost:3000/api/lista/pendientes

# 6. Ver solo completados
curl http://localhost:3000/api/lista/completados

# 7. Probar validación (debe fallar)
curl -X POST http://localhost:3000/api/lista \
  -H "Content-Type: application/json" \
  -d '{"name":"Test"}'

# 8. Probar ruta inexistente (404)
curl http://localhost:3000/api/noexiste
```

---

## 📊 Códigos de Estado HTTP

| Código | Descripción |
|--------|-------------|
| **200** | OK - Petición GET exitosa |
| **201** | Created - Recurso creado exitosamente |
| **400** | Bad Request - Datos inválidos o faltantes |
| **404** | Not Found - Endpoint no existe |

---

## 🏗️ Arquitectura del Código

### **Flujo de una petición:**

```
1. Cliente envía HTTP Request
   ↓
2. server.js recibe la petición
   ↓
3. salesRoutes.js identifica la ruta y método
   ↓
4. salesController.js ejecuta la lógica correspondiente
   ↓
5. Sale.js (modelo) valida/procesa datos
   ↓
6. salesController.js prepara la respuesta
   ↓
7. responseHandler.js formatea como JSON
   ↓
8. Cliente recibe HTTP Response
```

### **Responsabilidades por capa:**

- **Models (`Sale.js`)**: Define estructura de datos, validaciones y operaciones CRUD en memoria
- **Controllers (`salesController.js`)**: Lógica de negocio de cada endpoint
- **Routes (`salesRoutes.js`)**: Mapeo de URLs a controladores
- **Utils**: Funciones auxiliares reutilizables
- **Server (`server.js`)**: Configuración e inicio del servidor HTTP

---

## 🎯 Características Técnicas

✅ **Sin frameworks** - Solo `node:http` nativo
✅ **Arquitectura MVC** - Código modular y organizado  
✅ **Separación de responsabilidades** - Cada archivo tiene un propósito claro
✅ **Validaciones robustas** - Manejo correcto de tipos de datos
✅ **Manejo de errores** - Responses apropiados para cada caso
✅ **Headers correctos** - `Content-Type: application/json`
✅ **Código limpio** - Comentarios y nombres descriptivos

---

## 📝 Testing con Postman

### Colección de pruebas:

1. **GET Lista completa**
   - URL: `http://localhost:3000/api/lista`
   - Method: GET

2. **GET Pendientes**
   - URL: `http://localhost:3000/api/lista/pendientes`
   - Method: GET

3. **GET Completados**
   - URL: `http://localhost:3000/api/lista/completados`
   - Method: GET

4. **POST Crear venta**
   - URL: `http://localhost:3000/api/lista`
   - Method: POST
   - Headers: `Content-Type: application/json`
   - Body (raw JSON):
   ```json
   {
     "name": "Test Postman",
     "description": "Prueba desde Postman",
     "date": "2025-12-20",
     "esCompletado": false
   }
   ```

5. **POST Validación error**
   - URL: `http://localhost:3000/api/lista`
   - Method: POST
   - Headers: `Content-Type: application/json`
   - Body (raw JSON):
   ```json
   {
     "name": "Solo nombre"
   }
   ```
   - Debe devolver error 400

---

## 🐛 Troubleshooting

### Puerto ya en uso
```bash
# Error: EADDRINUSE
# Solución: Cambiar el puerto en src/server.js o matar el proceso
lsof -ti:3000 | xargs kill -9
```

### El servidor no inicia
```bash
# Verificar versión de Node
node --version

# Verificar que estás en la carpeta correcta
pwd
```

---

## 📦 Entregables para la Hackathon

✅ Todo el código fuente en carpeta `src/`
✅ `package.json` configurado
✅ `.gitignore` incluido
✅ `README.md` completo (este archivo)
✅ Estructura MVC profesional
✅ Código documentado con comentarios

---

## 👨‍💻 Autor

Proyecto desarrollado para hackathon de Node.js

---

## 📄 Licencia

ISC
