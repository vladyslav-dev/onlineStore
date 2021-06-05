const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const autoIncrement = require('mongoose-auto-increment')

const product = new Schema({
    subcategory : {
        type: Number
    },
    order_id : {
        type: Number,
        require : true,
        default : 0
    },
    name : {
        type: String
    },
    description : {
        type: String
    },
    cost : {
        type: Number
    },
    image : {
        type: String
    },
    availability : {
        type: Boolean
    }
}, {collection: 'productsCollection'});

// product.plugin(autoIncrement.plugin, 'productsCollection');

module.exports = mongoose.model('productsCollection', product);