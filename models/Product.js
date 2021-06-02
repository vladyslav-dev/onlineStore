const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema({
    subcategory : {
        type: Number
    },
    order_id : {
        type: Number
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

module.exports = mongoose.model('productsCollection', product);