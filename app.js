const express = require('express');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const path = require('path');
const testRouter = require('./src/routes/all.js');

mongoose.connect('mongodb://localhost:27017/toyota', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, 'connection error:'));
db.once("open", () => {
    console.log('Database connected');
})

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static('src/public'))

// using ejs
// app.get('/', (req, res) => {
//     const person = {
//         name: 'Wave',
//         age: 20
//     }
//     res.render('home', { person });
// })

app.use('/', testRouter);

app.get('/greeting', (req, res) => {
    res.send('Hello my frined!');
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000!!!');
})