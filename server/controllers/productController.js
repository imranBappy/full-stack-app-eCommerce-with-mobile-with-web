const Brand = require('../models/Brand')
const Category = require('../models/Category')
const Product = require('../models/Product')


// product post controller
exports.productPostController = async (req, res, next) => {
    let { name, category, brand, price, stock } = req.body
    let newProduct = new Product({
        name, category, brand, price, stock,
        thumbnail: req.file ? `${req.file?.path}` : "",
        gallery: [],
    })
    try {
        let createdProduct = await newProduct.save()

        // update brand
        await Brand.findOneAndUpdate(
            { _id: brand },
            { $push: { 'products': newProduct._id } }
        )

        // update category
        await Category.findOneAndUpdate(
            { _id: category },
            { $push: { 'products': newProduct._id } }
        )

        res.json(createdProduct)
    } catch (e) {
        next(e)
    }
}

// product get controller

exports.productsGetController = async (req, res, next) => {
    let currentPage = parseInt(req.query?.page) || 1
    let itemPerPage = 10
    let order = 1;
    try {
        let dataLength = await Product.find({})

        let products = await Product.find({})
            .select('-__v -updatedAt')
            .populate('brand', '_id name')
            .populate('category', '_id name')

            .sort(order === 1 ? '-createdAt' : 'createdAt')
            .skip((itemPerPage * currentPage) - itemPerPage)
            .limit(itemPerPage)


        res.json({ products, length: dataLength.length })
    } catch (error) {
        next(error)
    }
}

exports.productGetController = async (req, res, next) => {
    const { productId } = req.params;
    try {
        let product = await Product.findById(productId)
            .select('-__v -updatedAt')
        res.json(product)
    } catch (error) {
        next(error)
    }
}

exports.productPatchController = async (req, res, next) => {
    const { productId } = req.params
    let { name, price, stock } = req.body
    const category = req.body?.category;
    const brand = req.body?.brand;

    try {
        let product = await Product.findById(productId);
        if (!product) {
            let error = new Error('404 blog not found')
            error.status = 404
            throw error
        }

        product.name = name || product.name;
        product.price = price || product.price;
        product.stock = stock || product.stock;
        product.thumbnail = req?.file?.path || product?.thumbnail;


        if (product.category !== category) {
            await Category.findOneAndUpdate(
                { _id: category },
                { $push: { 'products': productId } }
            )
            await Category.findOneAndUpdate(
                { _id: product.category },
                { $pull: { 'products': productId } }
            )
        }

        if (product.brand !== brand) {
            await Brand.findOneAndUpdate(
                { _id: brand },
                { $push: { 'products': productId } }
            )
            await Brand.findOneAndUpdate(
                { _id: product.brand },
                { $pull: { 'products': productId } }
            )
        }


        product.category = category || product.category;
        product.brand = brand || product.brand;


        await product.save();

        res.json(product)
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.productDeleteController = async (req, res, next) => {
    const { productId } = req.params
    try {
        let product = await Product.findOne({ _id: productId })
        if (!product) {
            let error = new Error('404 blog not found')
            error.status = 404
            throw error
        }
        await Product.findOneAndDelete({ _id: productId })
        await Brand.findOneAndUpdate(
            { _id: product.brand },
            { $pull: { 'products': product._id } }
        );
        await Category.findOneAndUpdate(
            { _id: product.category },
            { $pull: { 'products': product._id } }
        )
        res.json(product)
    } catch (error) {
        next(error)
    }
}
