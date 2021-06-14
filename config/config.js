const mongoose = require('mongoose');
require('dotenv/config');

const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.x9how.mongodb.net/desafio?retryWrites=true&w=majority`;

module.exports = () => {
    const config = {};

    config.dbConfig = mongoose.connect(DB_URL,{
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    return config;
}