const controllerHealth = require('../controllers/health');
const v1Router = require('./v1')

const router = require('express').Router();


router.get("/health",controllerHealth.getHealthAPI);
router.post("/health",(req,res)=>res.json({status:"Ok desde POST"}));

router.use('/user',require('./user.route'))
router.use('/v1',v1Router)

module.exports = router;