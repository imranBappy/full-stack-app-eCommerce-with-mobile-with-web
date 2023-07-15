const { productsGetController, productGetController, productPostController, productPatchController, productDeleteController } = require('../controllers/productController');
const isAuthenticated = require('../middlewares/isAuthenticated');
const upload = require('../middlewares/uploadMiddleware');

const router = require('express').Router();

router.get('/', productsGetController);
router.get('/:productId', productGetController);
router.post('/', upload.single('thumbnail'), productPostController);
router.patch('/:productId', isAuthenticated, upload.single('thumbnail'), productPatchController);
router.delete('/:productId', isAuthenticated, productDeleteController);





module.exports = router;