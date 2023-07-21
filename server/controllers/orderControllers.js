const Auth = require('../models/Auth')
const Brand = require('../models/Brand')
const Category = require('../models/Category')
const Order = require('../models/Order')
const Product = require('../models/Product')


// product post controller
exports.orderPostController = async (req, res, next) => {
    let { products, user, address, phone, total } = req.body

    let newOrder = new Order({
        user,
        products, address, phone, total
    })

    try {
        let createdProduct = await newOrder.save()
        // update brand
        await Auth.findOneAndUpdate(
            { _id: user },
            { $push: { 'orders': newOrder._id } }
        )
        res.json(createdProduct)
    } catch (e) {
        next(e)
    }
}

// product get controller

exports.ordersGetController = async (req, res, next) => {

    let { userId: user } = req.params
    console.log(req.params);
    let currentPage = parseInt(req.query?.page) || 1
    let itemPerPage = 10
    let order = 1;
    try {

        let orders = await Order.find({ user: user })
            .populate('user', 'name')
            .populate({
                path: 'products.product',
                select: 'name price image',
                populate: {
                    path: 'brand',
                    select: 'name'
                }
            })
            .select('-__v -updatedAt')
            .sort(order === 1 ? '-createdAt' : 'createdAt')
            .skip((itemPerPage * currentPage) - itemPerPage)
            .limit(itemPerPage)

        console.log(orders);
        res.json(orders)
    } catch (error) {
        console.log(error);
        next(error)
    }
}

