# Hackaton09 - v0.1 Inicio
Inicio del proyecto.

## Notas de versión
- Express con endpoint `/health`.
- Carga de variables con `dotenv`.
- Scripts `npm start` y `npm run dev` (con `nodemon`).


# Hackaton09 - v0.2 DB + Modelos
Etapa con Express, Sequelize y modelos definidos. Entidades y relaciones construidas.

## Notas de versión
- Endpoint `/health`.
- Config DB con Postgres o sqlite (según `DB_DIALECT`).
- Modelos: User, Course(con metadata JSONB/JSON), Lesson, Enrollment, Comment; relaciones y hooks básicos.
- Script `npm run db:sync` y sync opcional al levantar según `DB_SYNC` (`none|alter|force`).


# Hackaton09 - v0.3 CRUD API
Etapa con CRUD básico de usuarios, cursos y lecciones.

## Notas de versión
- CRUD sin autenticación:
  - `POST/GET /api/users`
  - `POST/GET/PUT/DELETE /api/courses`
  - `GET /api/courses/:id` (incluye lecciones)
  - `POST/GET/PUT/DELETE /api/courses/:courseId/lessons`

# Hackaton09 - v0.3.1 migraciones y seeds
Etapa con cambio de DBSync a migraciones e implementacion de seeds.

## Notas de versión
- Añadida infraestructura de migraciones con sequelize-cli.
- Añadido el seeder de datos de prueba.
- Ajuste quitando columna innecesaria birthdate de User.
- Scripts npm actualizados.