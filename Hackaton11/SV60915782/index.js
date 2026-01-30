const connectDB = require('./config/database');
const MateriaPrima = require('./models/MateriaPrima');
const Insumo = require('./models/Insumo');
const Personal = require('./models/Personal');
const Produccion = require('./models/Produccion');

// Función principal para demostrar las operaciones CRUD
async function main() {
  try {
    // Conectar a la base de datos
    await connectDB();
    
    console.log('\n🚀 Iniciando Sistema de Gestión de Producción de Armarios\n');
    
    // ========================================
    // 1. COMPRA DE MATERIA PRIMA (3-1)
    // ========================================
    console.log('📦 1. REGISTRANDO COMPRA DE MATERIA PRIMA...');
    
    const materiaPrima1 = await MateriaPrima.create({
      nombre: 'Tablón de Roble',
      tipo: 'tablon',
      cantidad: 50,
      precioUnitario: 3,
      proveedor: 'Maderera El Bosque'
    });
    
    const materiaPrima2 = await MateriaPrima.create({
      nombre: 'Tablón de Pino',
      tipo: 'tablon',
      cantidad: 30,
      precioUnitario: 2.5,
      proveedor: 'Maderera El Bosque'
    });
    
    console.log(`   ✓ Materia Prima registrada: ${materiaPrima1.nombre}`);
    console.log(`     - Cantidad: ${materiaPrima1.cantidad} unidades`);
    console.log(`     - Precio Total: S/. ${materiaPrima1.precioTotal}`);
    
    // ========================================
    // 2. COMPRA DE INSUMOS (1-0.25)
    // ========================================
    console.log('\n🧪 2. REGISTRANDO COMPRA DE INSUMOS...');
    
    const insumo1 = await Insumo.create({
      nombre: 'Goma Industrial',
      tipo: 'goma',
      cantidad: 100,
      unidadMedida: 'kg',
      precioUnitario: 1,
      proveedor: 'Distribuidora Química SAC'
    });
    
    const insumo2 = await Insumo.create({
      nombre: 'Tornillos 3 pulgadas',
      tipo: 'tornillos',
      cantidad: 5000,
      unidadMedida: 'unidades',
      precioUnitario: 0.05,
      proveedor: 'Ferretería Central'
    });
    
    console.log(`   ✓ Insumo registrado: ${insumo1.nombre}`);
    console.log(`     - Cantidad: ${insumo1.cantidad} ${insumo1.unidadMedida}`);
    console.log(`     - Precio Total: S/. ${insumo1.precioTotal}`);
    
    // ========================================
    // 3. GESTIÓN DE PERSONAL (40-8)
    // ========================================
    console.log('\n👷 3. REGISTRANDO PERSONAL...');
    
    const empleado1 = await Personal.create({
      nombre: 'Juan',
      apellido: 'Pérez',
      cargo: 'operario',
      salarioPorHora: 40,
      horasTrabajadas: 160
    });
    
    const empleado2 = await Personal.create({
      nombre: 'María',
      apellido: 'García',
      cargo: 'supervisor',
      salarioPorHora: 50,
      horasTrabajadas: 160
    });
    
    const empleado3 = await Personal.create({
      nombre: 'Carlos',
      apellido: 'López',
      cargo: 'operario',
      salarioPorHora: 40,
      horasTrabajadas: 0
    });
    
    console.log(`   ✓ Personal registrado: ${empleado1.nombre} ${empleado1.apellido}`);
    console.log(`     - Cargo: ${empleado1.cargo}`);
    console.log(`     - Salario/hora: S/. ${empleado1.salarioPorHora}`);
    console.log(`     - Salario Total: S/. ${empleado1.salarioTotal}`);
    
    // ========================================
    // 4. PRODUCCIÓN DE ARMARIOS
    // (1 tablón, 0.25kg goma, 8 HH)
    // ========================================
    console.log('\n🏭 4. CREANDO ORDEN DE PRODUCCIÓN...');
    
    const produccion1 = await Produccion.create({
      codigoArmario: `ARM-${Date.now()}`,
      materiaPrima: {
        tablon: materiaPrima1._id,
        cantidadTablones: 1
      },
      insumos: {
        goma: insumo1._id,
        cantidadGoma: 0.25
      },
      personal: [
        {
          empleado: empleado3._id,
          horasAsignadas: 8
        }
      ],
      horasHombreTotales: 8,
      estado: 'planificado'
    });
    
    // Calcular costo de producción
    await produccion1.calcularCosto();
    await produccion1.save();
    
    console.log(`   ✓ Producción creada: ${produccion1.codigoArmario}`);
    console.log(`     - Tablones requeridos: ${produccion1.materiaPrima.cantidadTablones}`);
    console.log(`     - Goma requerida: ${produccion1.insumos.cantidadGoma} kg`);
    console.log(`     - Horas Hombre: ${produccion1.horasHombreTotales}`);
    console.log(`     - Costo Total: S/. ${produccion1.costoTotal.toFixed(2)}`);
    console.log(`     - Estado: ${produccion1.estado}`);
    
    // Iniciar producción
    await produccion1.iniciarProduccion();
    console.log(`   ✓ Producción iniciada`);
    
    // ========================================
    // 5. CONSULTAS AVANZADAS
    // ========================================
    console.log('\n📊 5. REALIZANDO CONSULTAS...\n');
    
    // Consulta 1: Total invertido en materia prima
    const totalMateriaPrima = await MateriaPrima.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: '$precioTotal' },
          cantidad: { $sum: '$cantidad' }
        }
      }
    ]);
    console.log('   📈 INVERSIÓN EN MATERIA PRIMA:');
    console.log(`      Total invertido: S/. ${totalMateriaPrima[0]?.total || 0}`);
    console.log(`      Unidades compradas: ${totalMateriaPrima[0]?.cantidad || 0}`);
    
    // Consulta 2: Total invertido en insumos
    const totalInsumos = await Insumo.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: '$precioTotal' }
        }
      }
    ]);
    console.log('\n   📈 INVERSIÓN EN INSUMOS:');
    console.log(`      Total invertido: S/. ${totalInsumos[0]?.total || 0}`);
    
    // Consulta 3: Nómina total del personal
    const nominaTotal = await Personal.aggregate([
      {
        $match: { activo: true }
      },
      {
        $group: {
          _id: null,
          totalNomina: { $sum: '$salarioTotal' },
          totalEmpleados: { $sum: 1 }
        }
      }
    ]);
    console.log('\n   📈 GESTIÓN DE PERSONAL:');
    console.log(`      Empleados activos: ${nominaTotal[0]?.totalEmpleados || 0}`);
    console.log(`      Nómina total: S/. ${nominaTotal[0]?.totalNomina || 0}`);
    
    // Consulta 4: Producciones por estado
    const produccionesPorEstado = await Produccion.aggregate([
      {
        $group: {
          _id: '$estado',
          cantidad: { $sum: 1 },
          costoTotal: { $sum: '$costoTotal' }
        }
      }
    ]);
    console.log('\n   📈 PRODUCCIÓN:');
    produccionesPorEstado.forEach(p => {
      console.log(`      ${p._id}: ${p.cantidad} armarios - Costo: S/. ${p.costoTotal.toFixed(2)}`);
    });
    
    // Consulta 5: Listar todas las producciones con detalles
    const produccionesDetalladas = await Produccion.find()
      .populate('materiaPrima.tablon')
      .populate('insumos.goma')
      .populate('personal.empleado');
    
    console.log('\n   📋 DETALLE DE PRODUCCIONES:');
    produccionesDetalladas.forEach(prod => {
      console.log(`      Armario: ${prod.codigoArmario}`);
      console.log(`      Estado: ${prod.estado}`);
      console.log(`      Costo: S/. ${prod.costoTotal.toFixed(2)}`);
    });
    
    // Consulta 6: Personal por cargo
    const personalPorCargo = await Personal.aggregate([
      {
        $group: {
          _id: '$cargo',
          cantidad: { $sum: 1 },
          salarioPromedio: { $avg: '$salarioPorHora' }
        }
      }
    ]);
    console.log('\n   📈 PERSONAL POR CARGO:');
    personalPorCargo.forEach(p => {
      console.log(`      ${p._id}: ${p.cantidad} empleados - Salario promedio: S/. ${p.salarioPromedio.toFixed(2)}/hora`);
    });
    
    // ========================================
    // 6. DEMOSTRACIÓN DE OPERACIONES CRUD
    // ========================================
    console.log('\n🔧 6. DEMOSTRANDO OPERACIONES CRUD:\n');
    
    // UPDATE: Actualizar stock de materia prima
    const materiaPrimaActualizada = await MateriaPrima.findByIdAndUpdate(
      materiaPrima1._id,
      { $inc: { cantidad: -1 } }, // Decrementar por producción
      { new: true }
    );
    console.log('   ✓ UPDATE: Stock actualizado');
    console.log(`     ${materiaPrimaActualizada.nombre}: ${materiaPrimaActualizada.cantidad} unidades restantes`);
    
    // READ: Buscar insumos por tipo
    const insumosGoma = await Insumo.find({ tipo: 'goma' });
    console.log('\n   ✓ READ: Insumos tipo "goma":');
    insumosGoma.forEach(i => {
      console.log(`     - ${i.nombre}: ${i.cantidad} ${i.unidadMedida}`);
    });
    
    // DELETE: Eliminar una producción (ejemplo)
    // await Produccion.findByIdAndDelete(produccion1._id);
    // console.log('\n   ✓ DELETE: Producción eliminada (comentado para mantener datos)');
    
    console.log('\n✨ DEMOSTRACIÓN COMPLETADA EXITOSAMENTE\n');
    console.log('═══════════════════════════════════════════════════════');
    console.log('📌 RESUMEN DEL SISTEMA:');
    console.log('   ✓ Materia Prima: Gestión completa con cálculo automático');
    console.log('   ✓ Insumos: Control de stock y precios');
    console.log('   ✓ Personal: Gestión de nómina y horas trabajadas');
    console.log('   ✓ Producción: ORM con referencias y cálculo de costos');
    console.log('   ✓ Consultas: Agregaciones y reportes');
    console.log('═══════════════════════════════════════════════════════\n');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error);
  } finally {
    // Cerrar conexión
    process.exit(0);
  }
}

// Ejecutar el programa
main();