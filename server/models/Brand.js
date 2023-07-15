const { Schema, model } = require('mongoose');

const brandSchema = new Schema({
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



const Brand = model('brand', brandSchema)
module.exports = Brand