const Category = require('../models/Category')


// categories post controller
exports.categoriesPostController = async (req, res, next) => {
    let { name } = req.body
    let newCategories = new Category({
        name,
        thumbnail: req.file ? `${req.file?.path}` : "",
        products: [],
    })
    try {
        let createdCategories = await newCategories.save()
        res.json(createdCategories)
    } catch (e) {
        next(e)
    }
}

// categories get controller

exports.categoriesGetController = async (req, res, next) => {
    let currentPage = parseInt(req.query.page) || 1
    let itemPerPage = 10
    let order = 1;
    try {
        let dataLength = await Category.find({})
        let categories = await Category.find({})
            .select('-__v -updatedAt')
            .sort(order === 1 ? '-createdAt' : 'createdAt')
            .skip((itemPerPage * currentPage) - itemPerPage)
            .limit(itemPerPage)
        res.json({ categories, length: dataLength.length })
    } catch (error) {
        next(error)
    }
}

