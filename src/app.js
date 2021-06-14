const express = require('express');
const router = express.Router();
const dbConfig = require('../config/config');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

dbConfig();

const index = require('./routes/index');
const analysis = require('./routes/clinical_analysis.route');

app.use('/', index);
app.use('/token', index);
app.use('/analise', analysis);

module.exports = app;