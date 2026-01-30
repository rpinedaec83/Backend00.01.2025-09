const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// RUTA 1: Crear un nuevo item en la lista
router.post('/crear', async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    
    const nuevoItem = new Item({
      nombre,
      descripcion,
      fecha: new Date(),
      esCompletado: false
    });

    await nuevoItem.save();
    res.json({ 
      success: true, 
      mensaje: 'Item creado exitosamente',
      item: nuevoItem 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      mensaje: 'Error al crear el item',
      error: error.message 
    });
  }
});

// RUTA 2: Mostrar items pendientes (no completados)
router.get('/pendientes', async (req, res) => {
  try {
    const itemsPendientes = await Item.find({ esCompletado: false }).sort({ fecha: -1 });
    res.json({
      success: true,
      count: itemsPendientes.length,
      items: itemsPendientes
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      mensaje: 'Error al obtener items pendientes',
      error: error.message 
    });
  }
});

// RUTA 3: Mostrar items completados
router.get('/completados', async (req, res) => {
  try {
    const itemsCompletados = await Item.find({ esCompletado: true }).sort({ fecha: -1 });
    res.json({
      success: true,
      count: itemsCompletados.length,
      items: itemsCompletados
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      mensaje: 'Error al obtener items completados',
      error: error.message 
    });
  }
});

// RUTA 4: Completar un item de la lista
router.put('/completar/:id', async (req, res) => {
  try {
    const itemActualizado = await Item.findByIdAndUpdate(
      req.params.id,
      { esCompletado: true },
      { new: true } // Retorna el documento actualizado
    );

    if (!itemActualizado) {
      return res.status(404).json({ 
        success: false, 
        mensaje: 'Item no encontrado' 
      });
    }

    res.json({
      success: true,
      mensaje: 'Item completado exitosamente',
      item: itemActualizado
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      mensaje: 'Error al completar el item',
      error: error.message 
    });
  }
});

// RUTA EXTRA: Obtener todos los items (útil para la interfaz)
router.get('/todos', async (req, res) => {
  try {
    const todosLosItems = await Item.find().sort({ fecha: -1 });
    res.json({
      success: true,
      count: todosLosItems.length,
      items: todosLosItems
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      mensaje: 'Error al obtener todos los items',
      error: error.message 
    });
  }
});

module.exports = router;