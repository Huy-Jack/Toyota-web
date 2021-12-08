const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    url: String,
    filename: String
})

const modelCar = ['Fortuner', 'Raize', 'Vios', 'Wigo','Avanza', 'Rush', 'Yaris', 'Hilux', 'Corolla Altis', 'Alphard', 'Granvia', 'Hiace',
'Land Prado', 'Land Cruiser', 'Camry', 'Corolla Cross', 'Innova'];
const carsSchema = new Schema({
    name: String,
    images: [imageSchema],
    price: Number,
    version: String,
    category: {
        type: String,
        enum: modelCar
    },
    origin: {
        type: String,
        enum: ["Xe trong nước", "Xe nhập khẩu"]
    }
})

module.exports = mongoose.model('Car', carsSchema);