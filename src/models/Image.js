const {Schema, model } = require ('mongoose');


const imagenSchema = new Schema({

    title: { type: String},
    description: { type: String},
    filename: { type: String},
    path: { type: String},
    originalname: { type: String},
    nimetype: { type: String},
    size: { type: Number},
    created_ad: {type: Date, default: Date.now()}


});

module.exports = model('Image', imagenSchema);