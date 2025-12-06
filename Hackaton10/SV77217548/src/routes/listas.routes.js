const express = require('express');
const {crearLista, listarListas, obtenerLista,
    duplicarLista, marcarItem} = require('../controllers/listas.controller');
const {authenticate} = require('../middlewares/auth');
const {asyncHandler} = require('../utils/async-handler');

const router = express.Router();

router.use(authenticate);

router.get('/', asyncHandler(listarListas));
router.get('/:id', asyncHandler(obtenerLista));
router.post('/', asyncHandler(crearLista));
router.post('/:id/duplicar', asyncHandler(duplicarLista));
router.patch('/:id/items/:itemId', asyncHandler(marcarItem));

module.exports = router;
