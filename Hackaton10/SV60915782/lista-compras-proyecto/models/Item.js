const mongoose = require('mongoose');

// Esquema de un item de la lista de compras
const itemSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    required: true,
    trim: true
  },
  fecha: {
    type: Date,
    default: Date.now
  },
  esCompletado: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true // Añade createdAt y updatedAt automáticamente
});

module.exports = mongoose.model('Item', itemSchema);