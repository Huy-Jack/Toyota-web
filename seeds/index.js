const mongoose  = require('mongoose');
const Car = require('../src/models/cars.js');
const { cars, origin, colorsCar, interior, exterior, safe, operate } = require('./cars.js');
const carjson = require('./data_car_toyota.json');

mongoose.connect('mongodb://localhost:27017/toyota', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, 'connection error:'));
db.once("open", () => {
    console.log('Database connected');
})   

const modelCar = ['Fortuner', 'Raize', 'Vios', 'Wigo','Avanza', 'Rush', 'Yaris', 'Hilux', 'Corolla Altis', 'Alphard', 'Granvia', 'Hiace',
'Land Prado', 'Land Cruiser', 'Camry', 'Corolla Cross', 'Innova'];

const getModel = (nameCar) => {
    let res = '';
    modelCar.forEach(model => {
        const modelUpper = model.toUpperCase();
        if (nameCar.includes(modelUpper)) {
            res = model;
        }
    })
    return res;
}

const initData = async() =>{
    await Car.deleteMany({});

    for (let i=0; i<carjson.length; i++) {
        const price = parseInt(carjson[i].price.split(".").join(""));
        const model = getModel(carjson[i].title);
        const car = new Car({
            name: carjson[i].title,
            priceOriginal: price,
            origin: carjson[i].description_4,
            category: model,
            types: carjson[i].description_2,
            imageOriginal: [
                {
                    url: 'https://res.cloudinary.com/duy-t-n/image/upload/v1639190152/Toyota/kz10l8vp6ysicym6ncxw.png',
                    filename: 'Toyota/kz10l8vp6ysicym6ncxw'
                }
            ],
            version: carjson[i].title,
            descriptions: [carjson[i].description_1, carjson[i].description_2, carjson[i].description_3, carjson[i].description_4, carjson[i].description_5, carjson[i].description_6],
            colorsCar : colorsCar,
            interior: interior,
            exterior: exterior,
            safe: safe,
            operate: operate,
            seats: carjson[i].description_1
        })
        await car.save();
    }
    console.log('Finish!!');
}

initData();

// let  nums = [2,3,4,5,6];
// nums = nums.filter(num => num > 3);
// console.log(nums);