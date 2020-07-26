const mongoose = require('mongoose');
const DB_URI = 'mongodb+srv://dbNatashaDianeey:bigotes08@cluster0.hqb3l.mongodb.net/first-DB?retryWrites=true&w=majority';

mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true}, (err)=> 
    err ? console.error(err) : console.info('Databased connected')
);

module.exports = mongoose