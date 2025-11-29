# Cómo probar

## Prueba con postgre:
Primero tenemos que crear el rol para el DB en pgAdmin en un query:
```sql
CREATE ROLE user_example
  WITH LOGIN PASSWORD 'password_example'
       CREATEDB
       INHERIT;
```

y luego el DB:
```sql
CREATE DATABASE "Hackaton09DB" OWNER user_example;
```
Tenemos que configurar el .env con 
```env
DB_PORT=5432                  # Puerto configurado de tu DB
DB_DATABASE=Hackaton09DB      # Nombre de tu base de datos
DB_USERNAME=user_example      # Username de la DB
DB_PASSWORD=password_example  # Password de la DB
DB_DIALECT=postgres           # postgres en este caso
DB_SYNC=alter                 # tipo de sync
```

Luego vamos a ejecutar los comandos:
```bash
npm install
npm run dev         # o npm start
# Opcional por si quieres sincronizar de manera manual.
npm run db:sync
```

Para probar que las tablas se hayan creado correctamente, puedes verificar en pgAdmin si lo tienes instalado y configurado para postgres en tu .env.


# Preuba con sqlite:
Si no tienes sqlite3 para probarlo, instálalo desde:
https://sqlite.org/download.html

Tenemos que configurar el .env con 
```env
DB_DIALECT=sqlite               # sqlite en este caso
DB_SYNC=alter                   # tipo de sync
DB_STORAGE=./tests/tmp.sqlite   # Ejemplo para crear el .sqlite en la carpeta /tests
```

Luego vamos a ejecutar los comandos:
```bash
npm install
npm run dev         # o npm start
# Opcional por si quieres sincronizar de manera manual.
npm run db:sync
```

Verás cómo se creó el archivo .sqlite donde lo pusiste y lo puedes visualizar si por ejemplo lo llamaste tmp.sqlite en la carpeta /tests:
```bash
sqlite3 ./tests/tmp.sqlite ".tables"                    # Visualizamos las tablas existentes
sqlite3 ./tests/tmp.sqlite "PRAGMA table_info(users);"  # Muestra el esquema de la tabla users
```

## Prueba del Health
Ahora en otra terminal prueba, para verificar que el health funciona mientras está ejecutando server.js:
```bash
curl http://localhost:3000/health
```
Deberías recibir:
```json
{ "ok": true, "timestamp": "..." }
```

