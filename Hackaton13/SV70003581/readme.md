## Comandos de ejecución:

    npm install

    npm run start

## Colección POSTMAN

    En la carpeta /docs

    Solo para POST, api-token = 123123

## Paquetes usados
### bcryptjs
Se usa para hashear contraseñas antes de guardarlas en la base de datos, evitando almacenar contraseñas en texto plano.
### cors
Permite que el navegador acceda a tu API desde otros dominios (por ejemplo, un frontend en React consumiendo tu backend).
### dotenv
Sirve para manejar variables de entorno desde un archivo .env (puertos, credenciales, claves secretas).
### express
Framework para crear el servidor, manejar rutas, middlewares y peticiones HTTP.
### express-validator
Middleware para validar y sanitizar datos que llegan en las requests (campos obligatorios, formato de email, etc.).
### mongoose
ODM (no ORM estrictamente) para modelar datos y trabajar con MongoDB usando esquemas y modelos.
### multer
Middleware para manejar subida de archivos (imágenes, PDFs, etc.), permitiendo definir límites de tamaño y cantidad.

helmet, compression, morgan, express-rate-limit