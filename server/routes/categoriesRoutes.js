const { categoriesGetController, categoriesPostController } = require('../controllers/categoryControllers');
const isAuthenticated = require('../middlewares/isAuthenticated');
const upload = require('../middlewares/uploadMiddleware');

const router = require('express').Router();

router.get('/', categoriesGetController);
router.get('/:productId',);
router.post('/', upload.single('thumbnail'), categoriesPostController);
router.patch('/:productId', isAuthenticated, upload.single('thumbnail'));
router.delete('/:productId', isAuthenticated,);





module.exports = router;