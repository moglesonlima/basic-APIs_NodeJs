'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const app = express();

//Conectando DB
mongoose.connect('mongodb+srv://mogly:9942@cluster0.4ogvtuv.mongodb.net/?retryWrites=true&w=majority')

//carregando models
const Product = require('./models/product')

//Carregando rotas
const indexRoute  = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;