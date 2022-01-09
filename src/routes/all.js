const express = require('express');
const routes = express.Router();
const carController = require('../controllers/carController')

routes.get('/', (req, res) => {
    res.render('home');
})

routes.get('/products', (req, res) => {
    res.render('products');
})

routes.get('/getproducts', carController.getCars)

routes.post('/filter', carController.filterAll)

routes.post('/filter/types', carController.filterTypes)

routes.post('/filter/category', carController.filterCategory)

module.exports = routes;