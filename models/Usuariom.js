var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    nombre: {type: String, required: true, max:30},
    username: {type: String, required: true, max:20},
    correo: {type: String, required: true, max:40},
    celular: {type: String, required: true, max:9},
    preferencia: {type: String, required: true, max:20},
    edad: {type: String, required: true, max:2}
})

module.exports = mongoose.model('Usuario', UsuarioSchema);