const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
    name: {
        type: String,
        min: 2,
        require: true
    },
    thumbnail: String,
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'product'
        }
    ]
}, { timestamps: true })


const Category = model('category', categorySchema)
module.exports = Category