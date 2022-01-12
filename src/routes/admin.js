// const express = require('express');
// const router = express.Router();
// const multer = require('multer');           // using when upload file, (multipart/form-data)
// const { cloudinary } = require('../cloudinary');
// const { storage } = require('../cloudinary');
// const upload = multer({storage});
// const passport = require('passport');
// const Car = require('../models/cars.js');
// const Admin = require('../models/admin.js');
// const { isLoggedIn } = require('../../middleware.js');

// router.get('/', (req, res) => {
//     res.render('admin/index');
// })

// //isLoggedIn,
// router.get('/new-car',  (req, res) => {
//     res.render('admin/new-car', {});
// })
// //list modelCar = [{id: '001', name: 'SUV'}, {...} ... ]
// router.get('/register', (req, res) => {
//     res.render('admin/register');
// })

// router.post('/register', async(req, res) => {
//     try{
//         const {email, username, password}  = req.body;
//         const admin = new Admin({email, username});
//         const registerAdmin = await Admin.register(admin, password);
        
//         req.login(registerAdmin, err =>{
//             res.redirect('/admin/new-car');
//         })
//     }
//     catch(e){
//         res.redirect('/admin/register');
//     }
// })

// router.get('/login', (req, res) => {
//     res.render('admin/login');
// })

// router.post('/login', passport.authenticate('local', { failureRedirect: '/admin/login' }), (req, res) => {
//     res.redirect('/admin/new-car');
// })
 
// router.get('/logout', (req, res) => {
//     req.logout();
//     res.redirect('/admin');
// })

// router.post('/new-car', upload.array('images'), async(req, res) => {
//     const car = new Car(req.body.car);
//     console.log(req.files);
//     car.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
//     await car.save();
//     res.send(car);
// })

// router.get('/cars', async(req, res) => {
//     const car = await Car.find({});
//     res.json(car);
// })
// module.exports = router;