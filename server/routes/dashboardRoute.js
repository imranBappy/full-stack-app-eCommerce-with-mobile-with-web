const { dashboardProductsGetController } = require('../controllers/dashboardController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = require('express').Router();

router.get('/products', isAuthenticated, dashboardProductsGetController);

module.exports = router;