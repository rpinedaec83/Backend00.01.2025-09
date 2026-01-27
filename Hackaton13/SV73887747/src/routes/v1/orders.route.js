const express = require('express');
const multer = require('multer');
const upload = multer({ 
    dest: 'uploads/',
    limits: { 
        fileSize: 2 * 1024 * 1024 
    } 
});

const validateOrder = require('../../middlewares/validateOrder');

const router = express.Router();
let orders = [];
const seen = new Map();  // Idempotencia

router.get('/', (req, res) => res.json(orders));

router.get('/:id', (req, res) => {
  const order = orders.find(o => o.id == req.params.id);
  if (!order) return res.status(404).json({ message: 'Order no encontrado' });
  res.json(order);
});

const cryptoRandom = Math.random().toString(36).slice(2);
router.post('/', validateOrder, (req, res) => {
  const key = req.headers['idempotency-key'];
  if (!key) return res.status(400).json({ message: 'Idempotency key required' });
  if (seen.has(key)) return res.status(200).json(seen.get(key));

  const newOrder = { id: cryptoRandom(), ...req.body };
  orders.push(newOrder);
  seen.set(key, newOrder);
  res.status(201).json(newOrder);
});

router.put('/:id', validateOrder, (req, res) => {
  const index = orders.findIndex(o => o.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Order no encontrado' });

  orders[index] = { ...orders[index], ...req.body }; 
  res.json(orders[index]);
});

router.delete('/:id', (req, res) => {
  const index = orders.findIndex(o => o.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Order no encontrado' });

  orders.splice(index, 1);
  res.status(204).json({ message: `Order ${req.params.id} eliminado exitosamente` });
});

router.post('/upload-receipt', upload.single('receipt'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'Debe subir una imagen. Usa form-data con key "receipt" y selecciona file.' });
  }

  console.log(`Archivo subido: ${req.file.originalname}, guardado en ${req.file.path}, tamaño ${req.file.size} bytes`);

  res.json({
    message: 'Archivo subido exitosamente',
    originalName: req.file.originalname,  
    storedAt: req.file.filename, 
    path: req.file.path, 
    size: req.file.size
  });
});

module.exports = router;