const { brandPostController, brandsGetController } = require('../controllers/brandControllers');
const isAuthenticated = require('../middlewares/isAuthenticated');
const upload = require('../middlewares/uploadMiddleware');
const router = require('express').Router();


router.get('/', brandsGetController);
router.get('/:productId',);
router.post('/', upload.single('thumbnail'), brandPostController);
router.patch('/:productId', isAuthenticated, upload.single('thumbnail'));
router.delete('/:productId', isAuthenticated,);

module.exports = router;