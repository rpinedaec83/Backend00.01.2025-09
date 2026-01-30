# Lista de Compras - Node.js & MongoDB

Proyecto simple de lista de compras usando Node.js, Express y MongoDB.

## 📋 Requisitos

- Node.js instalado (v14 o superior)
- MongoDB instalado localmente O cuenta en MongoDB Atlas (gratis)

## 🚀 Instalación

1. **Instalar dependencias:**
```bash
npm install
```

2. **Configurar MongoDB:**

### Opción A: MongoDB Local
Si tienes MongoDB instalado localmente, el archivo `.env` ya está configurado para usarlo:
```
MONGODB_URI=mongodb://localhost:27017/lista-compras
```

### Opción B: MongoDB Atlas (Recomendado - Gratis)
1. Ve a https://www.mongodb.com/cloud/atlas/register
2. Crea una cuenta gratis
3. Crea un cluster gratuito
4. En "Database Access", crea un usuario con contraseña
5. En "Network Access", permite acceso desde cualquier IP (0.0.0.0/0)
6. Haz clic en "Connect" y copia la cadena de conexión
7. Edita el archivo `.env` y reemplaza con tu URL:
```
MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/lista-compras
```

3. **Ejecutar el proyecto:**
```bash
npm start
```

4. **Abrir en el navegador:**
```
http://localhost:3000
```

## 📁 Estructura del Proyecto

```
lista-compras/
├── models/
│   └── Item.js          # Modelo de datos (Nombre, Descripcion, Fecha, EsCompletado)
├── routes/
│   └── items.js         # Rutas de la API
├── views/
│   └── index.html       # Interfaz web
├── server.js            # Servidor principal
├── package.json         # Dependencias
└── .env                 # Configuración
```

## 🛣️ Rutas de la API

### 1. Crear un item
- **POST** `/api/items/crear`
- Body: `{ "nombre": "Leche", "descripcion": "Leche descremada 1L" }`

### 2. Ver items pendientes
- **GET** `/api/items/pendientes`

### 3. Ver items completados
- **GET** `/api/items/completados`

### 4. Completar un item
- **PUT** `/api/items/completar/:id`

### 5. Ver todos los items
- **GET** `/api/items/todos`

## 🧪 Pruebas con Postman o cURL

### Crear un item:
```bash
curl -X POST http://localhost:3000/api/items/crear \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Pan", "descripcion":"Pan integral"}'
```

### Ver pendientes:
```bash
curl http://localhost:3000/api/items/pendientes
```

### Completar item (reemplaza ID_DEL_ITEM):
```bash
curl -X PUT http://localhost:3000/api/items/completar/ID_DEL_ITEM
```

## ✨ Características

✅ Crear items con nombre y descripción  
✅ Ver todos los items  
✅ Filtrar items pendientes  
✅ Filtrar items completados  
✅ Marcar items como completados  
✅ Interfaz web responsive y moderna  
✅ Fechas automáticas  

## 🎯 Funcionalidades del Proyecto

El proyecto cumple con TODOS los requisitos:

1. ✅ **Ruta para crear la lista** → POST `/api/items/crear`
2. ✅ **Campos: Nombre, Descripcion, Fecha, EsCompletado** → Modelo en `models/Item.js`
3. ✅ **Ruta para mostrar pendientes** → GET `/api/items/pendientes`
4. ✅ **Ruta para mostrar completados** → GET `/api/items/completados`
5. ✅ **Ruta para completar un item** → PUT `/api/items/completar/:id`

## 📝 Notas

- La fecha se genera automáticamente al crear un item
- EsCompletado se inicializa en `false` por defecto
- La interfaz web permite usar todas las funcionalidades sin necesidad de Postman

## 🆘 Solución de Problemas

**Error de conexión a MongoDB:**
- Verifica que MongoDB esté corriendo (si es local)
- Verifica la cadena de conexión en `.env`
- Asegúrate de permitir el acceso desde tu IP en MongoDB Atlas

**Puerto 3000 en uso:**
- Cambia el puerto en el archivo `.env`
