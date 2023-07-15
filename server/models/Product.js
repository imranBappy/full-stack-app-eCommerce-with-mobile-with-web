const { Schema, model } = require('mongoose');


const productSchema = new Schema({
    name: {
        type: String,
        min: 2,
        require: true
    },
    thumbnail: String,
    gallery: [
        {
            type: String
        }
    ],
    category: {
        type: Schema.Types.ObjectId,
        ref: 'category'
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'brand'
    },
    price: {
        type: Number,
        require: true
    },
    stock: {
        type: Number,
        default: 0
    },
}, { timestamps: true })

productSchema.index({
    name: 'text',
    category: 'text'
})

const Product = model('product', productSchema)
module.exports = Product