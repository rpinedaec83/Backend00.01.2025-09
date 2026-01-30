const mongoose = require('mongoose');

const personalSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  cargo: {
    type: String,
    enum: ['operario', 'supervisor', 'gerente', 'almacenero'],
    default: 'operario'
  },
  salarioPorHora: {
    type: Number,
    required: true,
    default: 40
  },
  horasTrabajadas: {
    type: Number,
    default: 0,
    min: 0
  },
  salarioTotal: {
    type: Number,
    default: 0
  },
  fechaContratacion: {
    type: Date,
    default: Date.now
  },
  activo: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Middleware para calcular salario total
personalSchema.pre('save', function(next) {
  this.salarioTotal = this.horasTrabajadas * this.salarioPorHora;
  next();
});

// Método para registrar horas trabajadas
personalSchema.methods.registrarHoras = function(horas) {
  this.horasTrabajadas += horas;
  this.salarioTotal = this.horasTrabajadas * this.salarioPorHora;
  return this.save();
};

module.exports = mongoose.model('Personal', personalSchema);