const mongoose = require('mongoose');

const insumoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    enum: ['goma', 'pegamento', 'tornillos', 'bisagras', 'otro'],
    default: 'goma'
  },
  cantidad: {
    type: Number,
    required: true,
    min: 0
  },
  unidadMedida: {
    type: String,
    enum: ['kg', 'litros', 'unidades'],
    default: 'kg'
  },
  precioUnitario: {
    type: Number,
    required: true,
    default: 1
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

// Middleware para calcular precio total
insumoSchema.pre('save', function(next) {
  this.precioTotal = this.cantidad * this.precioUnitario;
  next();
});

module.exports = mongoose.model('Insumo', insumoSchema);