const mongoose  = require('mongoose');
const Car = require('../src/models/cars.js');
const { cars, origin, colorsCar, interior, exterior, safe, operate } = require('./cars.js');

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
            priceOriginal: priceRan,
            origin: originRan,
            category: cars[i].model,
            imageOriginal: [
                {
                    url: 'https://res.cloudinary.com/duy-t-n/image/upload/v1639190152/Toyota/kz10l8vp6ysicym6ncxw.png',
                    filename: 'Toyota/kz10l8vp6ysicym6ncxw'
                }
            ],
            versions: 'Toyota-v',
            descriptions: [...cars[i].description],
            colorsCar : colorsCar,
            interior: interior,
            exterior: exterior,
            safe: safe,
            operate: operate,
            types: 'SEDAN',
            seats: '5 chỗ'
        })
        await car.save();
    }
    console.log('Finish!!');
}

initData();
