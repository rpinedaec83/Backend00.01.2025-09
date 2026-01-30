const mongoose = require('mongoose');

const materiaPrimaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    enum: ['tablon', 'madera', 'otro'],
    default: 'tablon'
  },
  cantidad: {
    type: Number,
    required: true,
    min: 0
  },
  precioUnitario: {
    type: Number,
    required: true,
    default: 3
  },
  precioTotal: {
    type: Number
  },
  proveedor: {
    type: String,
    required: true
  },
  fechaCompra: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Middleware para calcular precio total antes de guardar
materiaPrimaSchema.pre('save', function(next) {
  this.precioTotal = this.cantidad * this.precioUnitario;
  next();
});

module.exports = mongoose.model('MateriaPrima', materiaPrimaSchema);