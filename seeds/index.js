const mongoose  = require('mongoose');
const Car = require('../src/models/cars.js');
const { cars, origin } = require('./cars.js');

mongoose.connect('mongodb://localhost:27017/toyota', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, 'connection error:'));
db.once("open", () => {
    console.log('Database connected');
})   

const myRandom = (s, e) => {
    return Math.floor(Math.random() * e + s);
}

const initData = async() =>{
    await Car.deleteMany({});
    for (let i=0; i<10; i++) {
        const priceRan = myRandom(5, 20) * 100000;
        const originRan = origin[myRandom(0,1)];
        const car = new Car({
            name: cars[i].name,
            price: priceRan,
            origin: originRan,
            category: cars[i].model,
            images: ['https://ssa-api.toyotavn.com.vn/Resources/Images/E686F5FF2B31D7E47A2EA60919DA8EEC.png',
                    'https://ssa-api.toyotavn.com.vn/Resources/Images/3B19AD24C38CE54D334BC1DEAF41587D.png'
                ],
            versions: 'Toyota-v',
            descriptions: [...cars[i].description]
        })
        await car.save();
    }
    console.log('Finish!!');
}

initData();
