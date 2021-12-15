const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    url: String,
    filename: String
});

const colorCarSchema = new Schema({
    name: String,
    color: String,
    price: Number ,
    image: imageSchema
});

const cardCar = new Schema({
    name: String,
    image: imageSchema,
    description: String
})

const carSchema = new Schema({
    name: {
        type: String
    },
    imageOriginal: {
        type: [imageSchema]
    },
    priceOriginal: {
        type: Number
    },
    version: {
        type: String
    },
    category: {
        type: String
    },
    origin: {
        type: String
    },
    descriptions: {
        type: [String]
    },
    colorsCar: {
        type:  [colorCarSchema]
    },
    exterior: {
        type: [cardCar]
    }, interior: {
        type: [cardCar]
    },
    safe: {
        type: [cardCar]
    },
    operate: {
        type: [cardCar]
    },
    seats: {
        type: String
    },
    types: {
        type: String
    }
})

module.exports = mongoose.model('Car', carSchema);