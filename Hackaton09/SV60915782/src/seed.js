// src/seed.js
const { 
  sequelize, 
  User, 
  Course, 
  Lesson, 
  Enrollment, 
  Comment 
} = require('./models');

const seedDatabase = async () => {
  try {
    console.log('🌱 Iniciando seed de la base de datos...');
    
    // Limpiar tablas en orden correcto (respetando foreign keys)
    await Comment.destroy({ where: {}, force: true });
    await Enrollment.destroy({ where: {}, force: true });
    await Lesson.destroy({ where: {}, force: true, paranoid: false });
    await Course.destroy({ where: {}, force: true, paranoid: false });
    await User.destroy({ where: {}, force: true });
    
    console.log('🗑️  Tablas limpiadas');

    // =============================================
    // CREAR USUARIOS
    // =============================================
    const users = await User.bulkCreate([
      {
        firstName: 'Admin',
        lastName: 'System',
        email: 'admin@minilearning.com',
        role: 'admin'
      },
      {
        firstName: 'Juan',
        lastName: 'Pérez',
        email: 'juan.perez@example.com',
        role: 'instructor'
      },
      {
        firstName: 'María',
        lastName: 'García',
        email: 'maria.garcia@example.com',
        role: 'instructor'
      },
      {
        firstName: 'Carlos',
        lastName: 'López',
        email: 'carlos.lopez@example.com',
        role: 'student'
      },
      {
        firstName: 'Ana',
        lastName: 'Martínez',
        email: 'ana.martinez@example.com',
        role: 'student'
      },
      {
        firstName: 'Luis',
        lastName: 'Rodríguez',
        email: 'luis.rodriguez@example.com',
        role: 'student'
      },
      {
        firstName: 'Sofia',
        lastName: 'Hernández',
        email: 'sofia.hernandez@example.com',
        role: 'student'
      }
    ]);

    console.log(`✅ ${users.length} usuarios creados`);

    // =============================================
    // CREAR CURSOS
    // =============================================
    const courses = await Course.bulkCreate([
      {
        title: 'Introducción a JavaScript',
        slug: 'introduccion-javascript',
        description: 'Aprende los fundamentos de JavaScript desde cero. Perfecto para principiantes.',
        published: true,
        ownerId: users[1].id, // Juan Pérez (instructor)
        studentsCount: 3
      },
      {
        title: 'Node.js Avanzado',
        slug: 'nodejs-avanzado',
        description: 'Domina Node.js con patrones avanzados, arquitectura y mejores prácticas.',
        published: true,
        ownerId: users[1].id, // Juan Pérez
        studentsCount: 2
      },
      {
        title: 'React desde Cero',
        slug: 'react-desde-cero',
        description: 'Construye aplicaciones web modernas con React y sus hooks.',
        published: true,
        ownerId: users[2].id, // María García (instructor)
        studentsCount: 2
      },
      {
        title: 'PostgreSQL para Desarrolladores',
        slug: 'postgresql-desarrolladores',
        description: 'Base de datos relacionales con PostgreSQL y SQL avanzado.',
        published: false,
        ownerId: users[2].id, // María García
        studentsCount: 0
      },
      {
        title: 'Git y GitHub Profesional',
        slug: 'git-github-profesional',
        description: 'Control de versiones y colaboración con Git y GitHub.',
        published: true,
        ownerId: users[1].id, // Juan Pérez
        studentsCount: 1
      }
    ]);

    console.log(`✅ ${courses.length} cursos creados`);

    // =============================================
    // CREAR LECCIONES
    // =============================================
    
    // Lecciones para "Introducción a JavaScript"
    const jsLessons = await Lesson.bulkCreate([
      {
        title: 'Qué es JavaScript',
        slug: 'que-es-javascript',
        body: 'JavaScript es un lenguaje de programación interpretado, orientado a objetos, basado en prototipos...',
        order: 1,
        courseId: courses[0].id
      },
      {
        title: 'Variables y Tipos de Datos',
        slug: 'variables-tipos-datos',
        body: 'En JavaScript podemos declarar variables usando var, let y const. Los tipos de datos incluyen...',
        order: 2,
        courseId: courses[0].id
      },
      {
        title: 'Funciones en JavaScript',
        slug: 'funciones-javascript',
        body: 'Las funciones son bloques de código reutilizables. Pueden ser declaradas de varias formas...',
        order: 3,
        courseId: courses[0].id
      },
      {
        title: 'Arrays y Objetos',
        slug: 'arrays-objetos',
        body: 'Los arrays son colecciones ordenadas de elementos. Los objetos son colecciones de pares clave-valor...',
        order: 4,
        courseId: courses[0].id
      }
    ]);

    // Lecciones para "Node.js Avanzado"
    const nodeLessons = await Lesson.bulkCreate([
      {
        title: 'Event Loop y Asincronía',
        slug: 'event-loop-asincronia',
        body: 'El Event Loop es el corazón de Node.js. Permite operaciones no bloqueantes...',
        order: 1,
        courseId: courses[1].id
      },
      {
        title: 'Streams y Buffers',
        slug: 'streams-buffers',
        body: 'Los streams permiten procesar datos de forma eficiente sin cargar todo en memoria...',
        order: 2,
        courseId: courses[1].id
      },
      {
        title: 'Arquitectura de APIs REST',
        slug: 'arquitectura-apis-rest',
        body: 'Diseña APIs escalables siguiendo los principios REST y mejores prácticas...',
        order: 3,
        courseId: courses[1].id
      }
    ]);

    // Lecciones para "React desde Cero"
    const reactLessons = await Lesson.bulkCreate([
      {
        title: 'Componentes y Props',
        slug: 'componentes-props',
        body: 'Los componentes son las piezas fundamentales de React. Las props permiten pasar datos...',
        order: 1,
        courseId: courses[2].id
      },
      {
        title: 'useState y useEffect',
        slug: 'usestate-useeffect',
        body: 'Los hooks permiten usar estado y efectos secundarios en componentes funcionales...',
        order: 2,
        courseId: courses[2].id
      },
      {
        title: 'Context API y Estado Global',
        slug: 'context-api-estado-global',
        body: 'Context API permite compartir estado entre componentes sin prop drilling...',
        order: 3,
        courseId: courses[2].id
      }
    ]);

    // Lecciones para "Git y GitHub Profesional"
    const gitLessons = await Lesson.bulkCreate([
      {
        title: 'Fundamentos de Git',
        slug: 'fundamentos-git',
        body: 'Git es un sistema de control de versiones distribuido. Aprende los comandos básicos...',
        order: 1,
        courseId: courses[4].id
      },
      {
        title: 'Branching y Merging',
        slug: 'branching-merging',
        body: 'Las ramas permiten trabajar en diferentes features de forma aislada...',
        order: 2,
        courseId: courses[4].id
      }
    ]);

    const totalLessons = jsLessons.length + nodeLessons.length + reactLessons.length + gitLessons.length;
    console.log(`✅ ${totalLessons} lecciones creadas`);

    // =============================================
    // CREAR INSCRIPCIONES (ENROLLMENTS)
    // =============================================
    const enrollments = await Enrollment.bulkCreate([
      // Carlos (estudiante) inscrito en 3 cursos
      {
        userId: users[3].id, // Carlos
        courseId: courses[0].id, // JavaScript
        status: 'active',
        score: 85.50
      },
      {
        userId: users[3].id, // Carlos
        courseId: courses[1].id, // Node.js
        status: 'active',
        score: 78.00
      },
      {
        userId: users[3].id, // Carlos
        courseId: courses[2].id, // React
        status: 'pending',
        score: null
      },
      
      // Ana inscrita en 2 cursos
      {
        userId: users[4].id, // Ana
        courseId: courses[0].id, // JavaScript
        status: 'active',
        score: 92.75
      },
      {
        userId: users[4].id, // Ana
        courseId: courses[4].id, // Git
        status: 'active',
        score: 88.00
      },
      
      // Luis inscrito en 2 cursos
      {
        userId: users[5].id, // Luis
        courseId: courses[0].id, // JavaScript
        status: 'active',
        score: 76.50
      },
      {
        userId: users[5].id, // Luis
        courseId: courses[1].id, // Node.js
        status: 'pending',
        score: null
      },
      
      // Sofia inscrita en 1 curso
      {
        userId: users[6].id, // Sofia
        courseId: courses[2].id, // React
        status: 'active',
        score: 95.00
      }
    ]);

    console.log(`✅ ${enrollments.length} inscripciones creadas`);

    // =============================================
    // CREAR COMENTARIOS
    // =============================================
    const comments = await Comment.bulkCreate([
      // Comentarios en la lección "Variables y Tipos de Datos" (JS)
      {
        body: '¡Excelente explicación! Ahora entiendo la diferencia entre let y const.',
        userId: users[3].id, // Carlos
        lessonId: jsLessons[1].id
      },
      {
        body: 'Podrías explicar más sobre hoisting? Me quedó una duda.',
        userId: users[4].id, // Ana
        lessonId: jsLessons[1].id
      },
      {
        body: 'Muy clara la explicación. Los ejemplos ayudan mucho.',
        userId: users[5].id, // Luis
        lessonId: jsLessons[1].id
      },
      
      // Comentarios en "Funciones en JavaScript"
      {
        body: 'Las arrow functions me confundían antes, pero ahora lo entiendo mejor.',
        userId: users[3].id, // Carlos
        lessonId: jsLessons[2].id
      },
      {
        body: '¿Cuál es la mejor práctica: function declaration o arrow function?',
        userId: users[4].id, // Ana
        lessonId: jsLessons[2].id
      },
      
      // Comentarios en "Event Loop y Asincronía" (Node.js)
      {
        body: 'Este tema es complejo pero la explicación es muy buena.',
        userId: users[3].id, // Carlos
        lessonId: nodeLessons[0].id
      },
      {
        body: 'Me encantaría ver más ejemplos prácticos de async/await.',
        userId: users[5].id, // Luis
        lessonId: nodeLessons[0].id
      },
      
      // Comentarios en "useState y useEffect" (React)
      {
        body: 'Los hooks cambiaron mi forma de programar en React. ¡Genial!',
        userId: users[6].id, // Sofia
        lessonId: reactLessons[1].id
      },
      {
        body: 'Tuve problemas con useEffect y loops infinitos, pero esto me ayudó.',
        userId: users[3].id, // Carlos
        lessonId: reactLessons[1].id
      },
      
      // Comentarios en "Branching y Merging" (Git)
      {
        body: 'Finalmente entiendo cómo resolver conflictos de merge. Gracias!',
        userId: users[4].id, // Ana
        lessonId: gitLessons[1].id
      }
    ]);

    console.log(`✅ ${comments.length} comentarios creados`);

    // =============================================
    // RESUMEN
    // =============================================
    console.log('\n📊 RESUMEN DEL SEED:');
    console.log('====================');
    console.log(`👥 Usuarios: ${users.length}`);
    console.log(`📚 Cursos: ${courses.length}`);
    console.log(`📖 Lecciones: ${totalLessons}`);
    console.log(`📝 Inscripciones: ${enrollments.length}`);
    console.log(`💬 Comentarios: ${comments.length}`);
    console.log('\n✅ Seed completado exitosamente!\n');

  } catch (error) {
    console.error('❌ Error durante el seed:', error);
    throw error;
  }
};

// Ejecutar el seed
const runSeed = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado a la base de datos');
    
    await seedDatabase();
    
    await sequelize.close();
    console.log('👋 Conexión cerrada');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error fatal:', error);
    process.exit(1);
  }
};

// Solo ejecutar si es llamado directamente
if (require.main === module) {
  runSeed();
}

module.exports = { seedDatabase };