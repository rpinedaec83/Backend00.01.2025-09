# Hackaton09 - v0.1
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
