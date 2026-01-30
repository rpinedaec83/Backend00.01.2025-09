const { DataTypes } = require("sequelize");
const sequelize = require("./db");

/* =========================
    USER
========================= */
const User = sequelize.define("User", {
  firstName: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [2, 100]
    }
  },
  lastName: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [2, 100]
    }
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  role: {
    type: DataTypes.ENUM("student", "instructor", "admin"),
    allowNull: false,
    defaultValue: "student"
  }
}, {
  tableName: 'users',
  timestamps: true,
  paranoid: false, // User NO tiene soft delete según requisitos
  hooks: {
    beforeSave: (user) => {
      if (user.email) {
        user.email = user.email.toLowerCase().trim();
      }
      if (user.firstName) {
        user.firstName = user.firstName.trim();
      }
      if (user.lastName) {
        user.lastName = user.lastName.trim();
      }
    }
  }
});

/* =========================
   COURSE
========================= */
const Course = sequelize.define("Course", {
  title: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [5, 255]
    }
  },
  slug: {
    type: DataTypes.STRING(300),
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  published: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  studentsCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0
    }
  }
}, {
  tableName: 'courses',
  timestamps: true,
  paranoid: true, // ✅ Soft delete
  hooks: {
    beforeValidate: (course) => {
      // Auto-generar slug si no existe
      if (course.title && !course.slug) {
        course.slug = course.title
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-');
      }
    },
    beforeSave: (course) => {
      if (course.title) {
        course.title = course.title.trim();
      }
    }
  },
  scopes: {
    published: {
      where: { published: true }
    }
  }
});

/* =========================
   LESSON
========================= */
const Lesson = sequelize.define("Lesson", {
  title: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [3, 255]
    }
  },
  slug: {
    type: DataTypes.STRING(300),
    allowNull: false
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  order: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0
    }
  }
}, {
  tableName: 'lessons',
  timestamps: true,
  paranoid: true, // ✅ Soft delete
  hooks: {
    beforeValidate: (lesson) => {
      // Auto-generar slug si no existe
      if (lesson.title && !lesson.slug) {
        lesson.slug = lesson.title
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-');
      }
    },
    beforeSave: (lesson) => {
      if (lesson.title) {
        lesson.title = lesson.title.trim();
      }
    }
  }
});

/* =========================
   ENROLLMENT
========================= */
const Enrollment = sequelize.define("Enrollment", {
  status: {
    type: DataTypes.ENUM("pending", "active"),
    allowNull: false,
    defaultValue: "pending"
  },
  score: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: true,
    validate: {
      min: 0,
      max: 100
    }
  }
}, {
  tableName: 'enrollments',
  timestamps: true,
  paranoid: false // Enrollment NO tiene soft delete
});

/* =========================
   COMMENT
========================= */
const Comment = sequelize.define("Comment", {
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 5000]
    }
  }
}, {
  tableName: 'comments',
  timestamps: true,
  paranoid: false, // Comment NO tiene soft delete según requisitos
  hooks: {
    beforeSave: (comment) => {
      if (comment.body) {
        comment.body = comment.body.trim();
      }
    }
  }
});

/* =========================
   RELACIONES
========================= */

// User 1:N Course (como instructor/owner)
User.hasMany(Course, { 
  as: "ownedCourses", 
  foreignKey: "ownerId",
  onDelete: 'RESTRICT' // No permitir eliminar usuario si tiene cursos
});

Course.belongsTo(User, { 
  as: "owner", 
  foreignKey: "ownerId" 
});

// Course 1:N Lesson
Course.hasMany(Lesson, { 
  as: "lessons", 
  foreignKey: "courseId",
  onDelete: 'CASCADE' // Eliminar lecciones si se elimina el curso
});

Lesson.belongsTo(Course, { 
  as: "course", 
  foreignKey: "courseId" 
});

// User N:M Course (mediante Enrollment)
User.belongsToMany(Course, { 
  through: Enrollment, 
  as: "enrolledCourses",
  foreignKey: "userId",
  otherKey: "courseId"
});

Course.belongsToMany(User, { 
  through: Enrollment, 
  as: "students",
  foreignKey: "courseId",
  otherKey: "userId"
});

// Relaciones directas para Enrollment (facilita queries)
User.hasMany(Enrollment, { 
  as: "enrollments", 
  foreignKey: "userId" 
});

Enrollment.belongsTo(User, { 
  as: "user", 
  foreignKey: "userId" 
});

Course.hasMany(Enrollment, { 
  as: "enrollments", 
  foreignKey: "courseId" 
});

Enrollment.belongsTo(Course, { 
  as: "course", 
  foreignKey: "courseId" 
});

// User 1:N Comment
User.hasMany(Comment, { 
  as: "comments", 
  foreignKey: "userId",
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, { 
  as: "author", 
  foreignKey: "userId" 
});

// Lesson 1:N Comment
Lesson.hasMany(Comment, { 
  as: "comments", 
  foreignKey: "lessonId",
  onDelete: 'CASCADE'
});

Comment.belongsTo(Lesson, { 
  as: "lesson", 
  foreignKey: "lessonId" 
});

/* =========================
   SYNC
========================= */
const initModels = async () => {
  try {
    // alter: true actualiza sin borrar datos
    // force: true BORRA todo (solo para desarrollo inicial)
    await sequelize.sync({ alter: true });
    console.log('✅ Tablas sincronizadas correctamente');
  } catch (error) {
    console.error('❌ Error al sincronizar modelos:', error);
    throw error;
  }
};

module.exports = {
  sequelize,
  User,
  Course,
  Lesson,
  Enrollment,
  Comment,
  initModels
};