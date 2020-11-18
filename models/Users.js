const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    user_id : {
        type: String
    },
    fullName : {
        type: String
    },
    city : {
        type: String
    },
    mail : {
        type: String
    },
    phone : {
        type: String
    },
    postName : {
        type: String
    },
    postAddress : {
        type: String
    },
    paymentMethod : {
        type: String
    },
    date : {
        type: String
    },
    confirmed : {
        type: Boolean
    },
    success : {
        type: Boolean
    }
}, {collection: 'usersCollection'});

module.exports = mongoose.model('usersCollection', user);