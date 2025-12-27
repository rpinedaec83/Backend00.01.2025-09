const router = require('express').Router();

router.use('/users', require('./users.route'));
router.use('/orders', require('./orders.route'));

module.exports = router;
