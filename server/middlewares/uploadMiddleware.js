const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name: 'do5erbtee',
    api_key: '155916269871985',
    api_secret: 'z4TuFcGuRJvBs9d7crwxXGjFR0Q'
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'products',
        allowed_formats: ['jpg', 'jpeg', 'png', 'gif'],

        format: async (req, file,) => {
            if (!file || !file.mimetype.startsWith('image/')) {
                return new Error('Only image files are allowed!');
            }
            return 'jpeg';
        },
        public_id: (req, file) => {
            return `${file.fieldname}-${Date.now()}-${file.originalname}.jpeg`
        },
    },
});

module.exports = multer({ storage: storage });
