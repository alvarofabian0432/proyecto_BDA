var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AutoSchema = new Schema({
    nombre: {type: String, required: true, max:30},
    marca: {type: String, required: true, max:20},
    color: {type: String, required: true, max:20},
    estado: {type: String, required: true, max:10},
    stock: {type: String, required: true, max:20},
    capacidad: {type: String, required: true, max:2}

})

module.exports = mongoose.model('Auto', AutoSchema);