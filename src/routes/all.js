const express = require('express');
const routes = express.Router();


routes.get('/', (req, res) => {
    const person = {
        name: 'Wave',
        age: 20
    }
    res.render('home', { person });
})

module.exports = routes;