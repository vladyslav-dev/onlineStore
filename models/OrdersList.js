const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderList = new Schema({
    order_id : {
        type: String
    },
    full_name : {
        type: String
    },
    product_id : {
        type: Number
    },
    product_name : {
        type: String
    },
    product_cost : {
        type: Number
    },
    product_amount : {
        type: Number
    },
    total : {
        type: Number
    }
}, {collection: 'orderCollection'});

module.exports = mongoose.model('orderCollection', orderList);