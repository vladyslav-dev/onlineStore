const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goods = new Schema({
    id : {
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
    subcategory : {
        type: Number
    },
    availability : {
        type: Boolean
    }
}, {collection: 'goodsCollection'});

module.exports = mongoose.model('goodsCollection', goods);