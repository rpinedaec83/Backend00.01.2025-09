import mongoose from 'mongoose';
import { connectDB } from '../db/index.js';
import { createUser } from '../services/user.service.js';
import { config } from '../config/env.js';

const seedUsers = async () => {
  try {
    await connectDB();
    
    console.log('🌱 Iniciando seed de usuarios...\n');
    
    // Crear usuario admin
    try {
      const admin = await createUser('admin@test.com', 'admin123', 'admin');
      console.log('✅ Admin creado:', admin.email);
    } catch (error) {
      console.log('⚠️  Admin ya existe');
    }
    
    // Crear usuario normal
    try {
      const user = await createUser('user@test.com', 'user123', 'user');
      console.log('✅ Usuario creado:', user.email);
    } catch (error) {
      console.log('⚠️  Usuario ya existe');
    }
    
    // Crear más usuarios de prueba
    try {
      const user2 = await createUser('test@test.com', 'test123', 'user');
      console.log('✅ Usuario de prueba creado:', user2.email);
    } catch (error) {
      console.log('⚠️  Usuario de prueba ya existe');
    }
    
    console.log('\n🎉 Seed completado!\n');
    console.log('Credenciales de prueba:');
    console.log('------------------------');
    console.log('Admin: admin@test.com / admin123');
    console.log('User:  user@test.com  / user123');
    console.log('Test:  test@test.com  / test123');
    
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error en seed:', error);
    process.exit(1);
  }
};

seedUsers();