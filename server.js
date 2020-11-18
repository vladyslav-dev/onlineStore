const mongoose = require('mongoose');
const URI = 'mongodb+srv://admin:admin@cluster0.12if0.mongodb.net/first-database';
mongoose.Promise = global.Promise;

module.exports = mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,})
    .then( () => console.log('MongoDB has connected successfully'))
    .catch( (err) => console.log(err));


