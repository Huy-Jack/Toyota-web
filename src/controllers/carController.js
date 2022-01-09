const Car = require('../models/cars')

const carController = {};
const modelCar = ['Fortuner', 'Raize', 'Vios', 'Wigo','Avanza', 'Rush', 'Yaris', 'Hilux', 'Corolla Altis', 'Alphard', 'Granvia', 'Hiace',
'Land Prado', 'Land Cruiser', 'Camry', 'Corolla Cross', 'Innova'];

carController.filterCategory = async (req, res) =>{
    const { category } = req.query;
    const versions = [];
    const myCategory = getValueCategory(category);

    const cars = await Car.find({category : myCategory});
    cars.forEach(data => {
        if (!versions.includes(data.version)) versions.push(data.version);
    })
  
    res.json({data: versions});
}

carController.filterTypes = async (req, res) =>{
    const { style } = req.query;
    const model = [];
    const check = [];
    const types = getValueStyle(style);
    const cars = await Car.find({types});
    cars.forEach(data => {
        const index = modelCar.indexOf(data.category);
        if (!check.includes(index)) {
            const el = {index, category : data.category};
            model.push(el);
            check.push(index);
        }
    })
    res.json({data: model});
}
carController.filterAll = async (req, res) =>{
    const { style, price, seat, category, version, fuel, origin, sort } = req.query;
    const versions = (version!=='null') ? version : {$ne : ''};
 
    const types = getValueStyle(style);
    const priceOriginal = getValuePrice(price);
    const seats = getValueSeat(seat); 
    const model = getValueCategory(category);
    const myFuel = getValueFuel(fuel);
    const myOrigin = getValueOrigin(origin);
    var cars = await Car.find({ types, priceOriginal, seats, category : model, origin : myOrigin, descriptions : { $in : myFuel}, version : versions });
    if (sort === "1") cars = sortIncrease(cars);
    else if (sort === "3") cars = sortDecrease(cars);

    res.json({data : cars});
}

carController.getCars = async (req, res) => {
    const cars = await Car.find({});
    res.json({data: cars, msg: 'success'});
}

function getValuePrice(valuePrice) {
    let price;
    switch (valuePrice) {
        case "4": price = { $gte: 3000000000, $lt: 4000000000 };
            break;
        case "1": price = { $gte: 500000000, $lt: 1000000000 };
            break;
        case "2": price = { $gte: 1000000000, $lt: 2000000000 };
            break; 
        case "3": price = { $gte: 2000000000, $lt: 3000000000 };
            break;
        case "5": price = { $gte: 4000000000, $lt: 10000000000 };
            break; 
        case "6": price = { $gte: 300000000, $lt: 500000000 };
            break;
        default: price =  {$ne : ''};
    }
    return price;
}

function getValueStyle(valueStyle) {
    let style;
    switch (valueStyle) {
        case "0001": style = "Sedan";
            break;
        case "0002": style = "Hatchback";
            break;
        case "0003": style = "SUV";
            break;
        case "0004": style = "Đa dụng";
            break;
        case "0005": style = "Bán tải";
            break;
        case "0006": style = "Thương mại";
            break;
        default: style = {$ne : ''};
    }
    return style;
}

function getValueSeat(valueSeat) {
    let seats;
    switch (valueSeat) {
        case "1": seats = "5 Chỗ";
            break;
        case "2": seats = "7 Chỗ";
            break;  
        case "3": seats = "8 Chỗ";
            break;
        case "4": seats = "9 Chỗ";
            break;
        case "5": seats = "15 Chỗ";
            break; 
        default: seats =  {$ne : ''};
    }
    return seats;
}

function getValueCategory(valueCategory) {
    let category = {$ne : ''};
    if (valueCategory && valueCategory !== 'null') {
        let index = parseInt(valueCategory);
        category =  modelCar[index];
    }
    return category;
}

function getValueFuel(valueFuel) {
    let fuel;
    switch (valueFuel) {
        case "0001": fuel = "Xăng";
            break;
        case "0002": fuel = "Dầu";
            break;
        case "0003": fuel = "Xăng + Dầu";
            break;
        default: fuel = ["Xăng", "Dầu", "Xăng + Dầu"];
    }
    return fuel;
}

function getValueOrigin(valueOrigin) {
    let origin;
    switch (valueOrigin) {
        case "0001": origin = "Xe trong nước";
            break;
        case "0002": origin = "Xe nhập khẩu";
            break;
        default: origin = {$ne : ''};
    }
    return origin;
}

function sortIncrease(cars) {
    cars.sort((a,b)=> a.priceOriginal - b.priceOriginal);
    return cars;
}

function sortDecrease(cars) {
    cars.sort((a,b)=> b.priceOriginal - a.priceOriginal);
    return cars;
}
module.exports = carController;