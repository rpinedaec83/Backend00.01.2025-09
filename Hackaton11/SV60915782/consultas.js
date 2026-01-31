const connectDB = require('./config/database');
const MateriaPrima = require('./models/MateriaPrima');
const Insumo = require('./models/Insumo');
const Personal = require('./models/Personal');
const Produccion = require('./models/Produccion');

/**
 * CONSULTAS AVANZADAS PARA DEMOSTRAR CAPACIDADES DE MONGOOSE ORM
 */

async function consultasAvanzadas() {
  try {
    await connectDB();
    
    console.log('\n🔍 EJECUTANDO CONSULTAS AVANZADAS\n');
    
    // ==========================================
    // CONSULTA 1: Materia Prima disponible
    // ==========================================
    console.log('1️⃣ MATERIA PRIMA CON STOCK DISPONIBLE:');
    const materiaPrimaDisponible = await MateriaPrima.find({ 
      cantidad: { $gt: 0 } 
    }).sort({ cantidad: -1 });
    
    materiaPrimaDisponible.forEach(mp => {
      console.log(`   - ${mp.nombre}: ${mp.cantidad} unidades (S/. ${mp.precioUnitario} c/u)`);
    });
    
    // ==========================================
    // CONSULTA 2: Top 3 insumos más caros
    // ==========================================
    console.log('\n2️⃣ TOP 3 INSUMOS MÁS CAROS:');
    const insumosCaros = await Insumo.find()
      .sort({ precioTotal: -1 })
      .limit(3);
    
    insumosCaros.forEach((insumo, index) => {
      console.log(`   ${index + 1}. ${insumo.nombre}: S/. ${insumo.precioTotal}`);
    });
    
    // ==========================================
    // CONSULTA 3: Personal activo por cargo
    // ==========================================
    console.log('\n3️⃣ DISTRIBUCIÓN DE PERSONAL POR CARGO:');
    const personalPorCargo = await Personal.aggregate([
      { $match: { activo: true } },
      {
        $group: {
          _id: '$cargo',
          cantidad: { $sum: 1 },
          salarioPromedioHora: { $avg: '$salarioPorHora' },
          totalHorasTrabajadas: { $sum: '$horasTrabajadas' }
        }
      },
      { $sort: { cantidad: -1 } }
    ]);
    
    personalPorCargo.forEach(cargo => {
      console.log(`   ${cargo._id.toUpperCase()}:`);
      console.log(`      Empleados: ${cargo.cantidad}`);
      console.log(`      Salario promedio/hora: S/. ${cargo.salarioPromedioHora.toFixed(2)}`);
      console.log(`      Horas trabajadas: ${cargo.totalHorasTrabajadas}`);
    });
    
    // ==========================================
    // CONSULTA 4: Producciones completadas
    // ==========================================
    console.log('\n4️⃣ PRODUCCIONES COMPLETADAS CON DETALLES:');
    const produccionesCompletadas = await Produccion.find({ 
      estado: 'completado' 
    })
      .populate('materiaPrima.tablon', 'nombre precioUnitario')
      .populate('insumos.goma', 'nombre precioUnitario')
      .populate('personal.empleado', 'nombre apellido salarioPorHora');
    
    if (produccionesCompletadas.length === 0) {
      console.log('   No hay producciones completadas aún');
    } else {
      produccionesCompletadas.forEach(prod => {
        console.log(`   Código: ${prod.codigoArmario}`);
        console.log(`   Costo Total: S/. ${prod.costoTotal.toFixed(2)}`);
        console.log(`   Fecha Inicio: ${prod.fechaInicio.toLocaleDateString()}`);
        console.log(`   Fecha Fin: ${prod.fechaFinalizacion.toLocaleDateString()}`);
      });
    }
    
    // ==========================================
    // CONSULTA 5: Análisis de costos de producción
    // ==========================================
    console.log('\n5️⃣ ANÁLISIS DE COSTOS DE PRODUCCIÓN:');
    const analisisCostos = await Produccion.aggregate([
      {
        $group: {
          _id: '$estado',
          totalProduccion: { $sum: 1 },
          costoPromedio: { $avg: '$costoTotal' },
          costoTotal: { $sum: '$costoTotal' },
          costoMinimo: { $min: '$costoTotal' },
          costoMaximo: { $max: '$costoTotal' }
        }
      }
    ]);
    
    analisisCostos.forEach(estado => {
      console.log(`   Estado: ${estado._id.toUpperCase()}`);
      console.log(`      Total armarios: ${estado.totalProduccion}`);
      console.log(`      Costo promedio: S/. ${estado.costoPromedio.toFixed(2)}`);
      console.log(`      Costo total: S/. ${estado.costoTotal.toFixed(2)}`);
      console.log(`      Rango: S/. ${estado.costoMinimo.toFixed(2)} - S/. ${estado.costoMaximo.toFixed(2)}`);
    });
    
    // ==========================================
    // CONSULTA 6: Empleados con más horas
    // ==========================================
    console.log('\n6️⃣ TOP EMPLEADOS POR HORAS TRABAJADAS:');
    const topEmpleados = await Personal.find({ activo: true })
      .sort({ horasTrabajadas: -1 })
      .limit(5)
      .select('nombre apellido cargo horasTrabajadas salarioTotal');
    
    topEmpleados.forEach((emp, index) => {
      console.log(`   ${index + 1}. ${emp.nombre} ${emp.apellido} (${emp.cargo})`);
      console.log(`      Horas: ${emp.horasTrabajadas} | Salario: S/. ${emp.salarioTotal}`);
    });
    
    // ==========================================
    // CONSULTA 7: Inventario total
    // ==========================================
    console.log('\n7️⃣ RESUMEN DE INVENTARIO:');
    
    const resumenMateriaPrima = await MateriaPrima.aggregate([
      {
        $group: {
          _id: null,
          totalUnidades: { $sum: '$cantidad' },
          valorTotal: { $sum: '$precioTotal' },
          tipos: { $addToSet: '$tipo' }
        }
      }
    ]);
    
    const resumenInsumos = await Insumo.aggregate([
      {
        $group: {
          _id: null,
          valorTotal: { $sum: '$precioTotal' },
          tiposInsumos: { $addToSet: '$tipo' }
        }
      }
    ]);
    
    console.log('   MATERIA PRIMA:');
    console.log(`      Unidades totales: ${resumenMateriaPrima[0]?.totalUnidades || 0}`);
    console.log(`      Valor total: S/. ${resumenMateriaPrima[0]?.valorTotal || 0}`);
    
    console.log('\n   INSUMOS:');
    console.log(`      Valor total: S/. ${resumenInsumos[0]?.valorTotal || 0}`);
    
    // ==========================================
    // CONSULTA 8: Búsqueda con texto
    // ==========================================
    console.log('\n8️⃣ BÚSQUEDA DE MATERIA PRIMA (contiene "Roble"):');
    const busqueda = await MateriaPrima.find({ 
      nombre: { $regex: /roble/i } 
    });
    
    busqueda.forEach(item => {
      console.log(`   - ${item.nombre}: ${item.cantidad} unidades`);
    });
    
    // ==========================================
    // CONSULTA 9: Producciones próximas (en proceso)
    // ==========================================
    console.log('\n9️⃣ PRODUCCIONES EN PROCESO:');
    const enProceso = await Produccion.find({ estado: 'en_proceso' })
      .populate('personal.empleado', 'nombre apellido');
    
    if (enProceso.length === 0) {
      console.log('   No hay producciones en proceso');
    } else {
      enProceso.forEach(prod => {
        console.log(`   ${prod.codigoArmario}:`);
        console.log(`      Empleados asignados: ${prod.personal.length}`);
        console.log(`      Horas requeridas: ${prod.horasHombreTotales}`);
      });
    }
    
    // ==========================================
    // CONSULTA 10: Estadísticas generales
    // ==========================================
    console.log('\n🔟 ESTADÍSTICAS GENERALES DEL SISTEMA:\n');
    
    const totalMP = await MateriaPrima.countDocuments();
    const totalInsumos = await Insumo.countDocuments();
    const totalPersonal = await Personal.countDocuments({ activo: true });
    const totalProducciones = await Produccion.countDocuments();
    
    const valorTotalInventario = 
      (resumenMateriaPrima[0]?.valorTotal || 0) + 
      (resumenInsumos[0]?.valorTotal || 0);
    
    console.log(`   📦 Total Materia Prima: ${totalMP} registros`);
    console.log(`   🧪 Total Insumos: ${totalInsumos} registros`);
    console.log(`   👷 Personal Activo: ${totalPersonal} empleados`);
    console.log(`   🏭 Total Producciones: ${totalProducciones} armarios`);
    console.log(`   💰 Valor Total Inventario: S/. ${valorTotalInventario.toFixed(2)}`);
    
    console.log('\n✅ CONSULTAS COMPLETADAS EXITOSAMENTE\n');
    
  } catch (error) {
    console.error('❌ Error en consultas:', error.message);
  } finally {
    process.exit(0);
  }
}

// Ejecutar consultas
consultasAvanzadas();