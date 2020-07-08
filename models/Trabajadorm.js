var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TrabajadorSchema = new Schema({
    nombre: {type: String, required: true, max:30},
    username: {type: String, required: true, max:20},
    correo: {type: String, required: true, max:40},
    celular: {type: String, required: true, max:9},
    cargo: {type: String, required: true, max:20},
    area: {type: String, required: true, max:20}
})

module.exports = mongoose.model('Trabajador', TrabajadorSchema);