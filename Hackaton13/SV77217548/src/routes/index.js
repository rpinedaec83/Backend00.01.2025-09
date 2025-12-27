const router = require('express').Router();
const healthController = require('../controllers/health');
const dataController = require('../controllers/data');
const metricsController = require('../controllers/metrics.controller');
const {asyncHandler} = require('../middlewares');
const v1Router = require('./v1');

router.get('/health', asyncHandler(healthController.getHealth));
router.post('/data', asyncHandler(dataController.createData));
router.get('/metrics', asyncHandler(metricsController.getMetrics));
router.use('/v1', v1Router);

module.exports = router;
