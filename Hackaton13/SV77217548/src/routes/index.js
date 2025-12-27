const router = require('express').Router();
const healthController = require('../controllers/health');
const dataController = require('../controllers/data');
const {asyncHandler} = require('../middlewares');

router.get('/health', asyncHandler(healthController.getHealth));
router.post('/data', asyncHandler(dataController.createData));

module.exports = router;
