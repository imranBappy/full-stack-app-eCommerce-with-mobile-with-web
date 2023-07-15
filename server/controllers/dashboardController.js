const Auth = require('../models/Auth');
const Order = require('../models/Order');
const Product = require('../models/Product')


exports.dashboardProductsGetController = async (req, res, next) => {
    let currentPage = parseInt(req.query.page) || 1
    let itemPerPage = 10
    let order = 1;
    try {
        let products = await Product.find({})
            .sort(order === 1 ? '-createdAt' : 'createdAt')
            .skip((itemPerPage * currentPage) - itemPerPage)
            .limit(itemPerPage)

        res.json(products)
    } catch (error) {
        next(error)
    }
}

exports.dashboardOrdersGetController = async (req, res, next) => {
    let currentPage = parseInt(req.query.page) || 1
    let itemPerPage = 10
    const { status } = req.query
    let order = 1;
    try {
        let orders = await Order.find(status ? { status } : {})
            .sort(order === 1 ? '-createdAt' : 'createdAt')
            .skip((itemPerPage * currentPage) - itemPerPage)
            .limit(itemPerPage)

        res.json(orders)
    } catch (error) {
        next(error)
    }
}

exports.dashboardUsersGetController = async (req, res, next) => {
    let currentPage = parseInt(req.query.page) || 1
    let itemPerPage = 10
    let order = 1;
    try {
        let users = await Auth.find({ role: 'User' })
            .sort(order === 1 ? '-createdAt' : 'createdAt')
            .skip((itemPerPage * currentPage) - itemPerPage)
            .limit(itemPerPage)

        res.json(users)
    } catch (error) {
        next(error)
    }
}