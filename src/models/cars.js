const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    url: String,
    filename: String
});

const carSchema = new Schema({
    name: {
        type: String
    },
    images: {
        type: [imageSchema]
    },
    price: {
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
    }
})

module.exports = mongoose.model('Car', carSchema);