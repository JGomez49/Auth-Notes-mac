const mongoose = require('mongoose');
require('dotenv').config();

//MongoDB Atlas
const URI = process.env.MONGODB_URI

mongoose.connect(URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
    })
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.error(err));

module.exports = mongoose;