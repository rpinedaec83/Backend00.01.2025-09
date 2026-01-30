const mongoose = require('mongoose');

const produccionSchema = new mongoose.Schema({
  codigoArmario: {
    type: String,
    required: true,
    unique: true
  },
  materiaPrima: {
    tablon: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MateriaPrima',
      required: true
    },
    cantidadTablones: {
      type: Number,
      default: 1,
      required: true
    }
  },
  insumos: {
    goma: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Insumo',
      required: true
    },
    cantidadGoma: {
      type: Number,
      default: 0.25,
      required: true
    }
  },
  personal: [{
    empleado: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Personal',
      required: true
    },
    horasAsignadas: {
      type: Number,
      default: 8
    }
  }],
  horasHombreTotales: {
    type: Number,
    default: 8,
    required: true
  },
  estado: {
    type: String,
    enum: ['planificado', 'en_proceso', 'completado', 'cancelado'],
    default: 'planificado'
  },
  fechaInicio: {
    type: Date
  },
  fechaFinalizacion: {
    type: Date
  },
  costoTotal: {
    type: Number,
    default: 0
  },
  observaciones: {
    type: String
  }
}, {
  timestamps: true
});

// Método para calcular costo total de producción
produccionSchema.methods.calcularCosto = async function() {
  await this.populate('materiaPrima.tablon insumos.goma personal.empleado');
  
  let costo = 0;
  
  // Costo de materia prima
  if (this.materiaPrima.tablon) {
    costo += this.materiaPrima.tablon.precioUnitario * this.materiaPrima.cantidadTablones;
  }
  
  // Costo de insumos
  if (this.insumos.goma) {
    costo += this.insumos.goma.precioUnitario * this.insumos.cantidadGoma;
  }
  
  // Costo de mano de obra
  this.personal.forEach(p => {
    if (p.empleado) {
      costo += p.empleado.salarioPorHora * p.horasAsignadas;
    }
  });
  
  this.costoTotal = costo;
  return costo;
};

// Middleware para iniciar producción
produccionSchema.methods.iniciarProduccion = function() {
  this.estado = 'en_proceso';
  this.fechaInicio = new Date();
  return this.save();
};

// Middleware para completar producción
produccionSchema.methods.completarProduccion = function() {
  this.estado = 'completado';
  this.fechaFinalizacion = new Date();
  return this.save();
};

module.exports = mongoose.model('Produccion', produccionSchema);