const express = require('express');
const routes = express.Router();
const Car = require('../models/cars');

routes.get('/', (req, res) => {
    res.render('home');
})

routes.get('/products', async (req, res) => {
    const cars = await Car.find({});
    res.render('products', {cars});
})

module.exports = routes;