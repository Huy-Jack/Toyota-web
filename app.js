if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const Admin = require('./src/models/admin');

const productsRouter = require('./src/routes/all.js');
// const adminRouter = require('./src/routes/admin.js');

const urlDB = process.env.URL_DB || 'mongodb://localhost:27017/toyota';
mongoose.connect(urlDB, {
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

const secret = process.env.SECRET || 'thisisshouldbeabettersecret';
const sessionConfig = {
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 3,  // hết hạn sau 7 ngày.
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(Admin.authenticate()));

passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
})
app.use('/', productsRouter);
// app.use('/admin', adminRouter);

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log('LISTENING ON PORT ',PORT);
})