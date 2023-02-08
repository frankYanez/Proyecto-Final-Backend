const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const productsCollection = 'products';


const ProductsSchema = mongoose.Schema({

    name: {type: String, require: true, max: 30},
    price: {type: String, require: true, max: 30},
    stock: {type: Number, require: true, max: 100},
    category: {type: String, require: true, max: 100},
})

ProductsSchema.plugin(mongoosePaginate)

const productsModel = mongoose.model(productsCollection,ProductsSchema)

module.exports = productsModel