if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const $ = require('jquery');
const path = require('path');
const testRouter = require('./src/routes/all.js');
const adminRouter = require('./src/routes/admin.js');

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

app.use(express.urlencoded({ extended: true }));

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use('/jquery',express.static(path.join(__dirname+'/node_modules/jquery/dist/'))); 
app.use(express.static('src/public'));

app.use('/', testRouter);
app.use('/admin', adminRouter);
app.get('/greeting', (req, res) => {
    res.send('Hello my frined!');
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000!!!');
})