const { orderPostController, ordersGetController } = require('../controllers/orderControllers');

const router = require('express').Router();



router.get('/:userId', ordersGetController);
router.post('/', orderPostController);


module.exports = router;