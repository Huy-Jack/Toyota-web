const express = require('express');
const router = express.Router();
const multer = require('multer');           // using when upload file, (multipart/form-data)
const { cloudinary } = require('../cloudinary');
const { storage } = require('../cloudinary');
const upload = multer({storage});
const Car = require('../models/cars.js');

router.get('/', (req, res) => {
    res.render('admin/index');
})

router.get('/new-car', (req, res) => {
    res.render('admin/new');
})

router.post('/new-car', upload.array('images'), async(req, res) => {
    const car = new Car(req.body.car);
    console.log(req.files);
    car.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
    await car.save();
    res.send(car);
})

module.exports = router;