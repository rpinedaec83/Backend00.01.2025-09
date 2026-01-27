const express = require('express');
const router = express.Router();
const orderRouter = require('./orders.route');

router.use('/orders',orderRouter);

module.exports = router;