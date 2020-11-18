const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let subcategory = new Schema({
    id : {
        type: Number
    },
    ['subcategory-name'] : {
        type: String
    },
    image : {
        type: String
    },
    category : {
        type: Number
    }
}, {collection: 'subcategoryCollection'});

module.exports = mongoose.model('subcategoryCollection', subcategory);