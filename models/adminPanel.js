const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminPanel = new Schema({
    id : {
        type: Number,
        unique: true,
        autoIncrement: true
    },
    phone : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    }
}, {collection: 'adminPanel'});

module.exports = mongoose.model('adminPanel', adminPanel);