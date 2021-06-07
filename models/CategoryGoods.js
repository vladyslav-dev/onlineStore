const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let category = new Schema({
    id : {
        type: Number
    },
    ['category-name'] : {
        type: String
    },
    categorySrc : {
        type: String
    },
    image : {
        type: String
    }
}, {collection: 'categoryCollection'});

module.exports = mongoose.model('categoryCollection', category);