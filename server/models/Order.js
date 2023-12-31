const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Auth'
    },
    products: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: 'product'
            },
            quantity: Number
        }
    ],
    status: {
        type: String,
        enum: ['Pending', 'Delivered', 'Cancelled'],
        default: 'Pending'
    },
    address: String,
    phone: String,
    total: Number,
    payment: {
        type: String,
        enum: ['Online', 'Cash On Delivery'],
        default: 'Cash On Delivery'
    },
}, { timestamps: true })



const Order = model('order', orderSchema)
module.exports = Order