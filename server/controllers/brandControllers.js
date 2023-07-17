const Brand = require('../models/Brand')


// brand post controller
exports.brandPostController = async (req, res, next) => {
    let { name } = req.body

    let newBrand = new Brand({
        name,
        thumbnail: req.file ? `${req.file?.path}` : "",
        products: [],
    })
    try {
        let createdBrand = await newBrand.save()
        res.json(createdBrand)
    } catch (e) {
        next(e)
    }
}

// brands get controller

exports.brandsGetController = async (req, res, next) => {
    let currentPage = parseInt(req.query.page) || 1
    let itemPerPage = 10
    let order = 1;
    try {
        let dataLength = await Brand.find({})
        let brands = await Brand.find({})
            .select('-__v -updatedAt')
            .skip((itemPerPage * currentPage) - itemPerPage)
            .limit(itemPerPage)
        res.json({ brands, length: dataLength.length })
    } catch (error) {
        next(error)
    }
}

