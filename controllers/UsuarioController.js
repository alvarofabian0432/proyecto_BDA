var mongoose = require('mongoose');
var Usuariom = require('../models/Usuariom');

var usuarioController = {}

usuarioController.list = function (req,res) {
    Usuariom.find({}).exec(function(err,usuarios) {
        if (err) {
            console.log('Error', err);
            return;
        }
        res.render('../views/usuariom/index',{usuarios: usuarios})
    });
};

usuarioController.create = function (req,res) {
    res.render('../views/usuariom/create');
};

usuarioController.save = function (req,res) {
    var usuariom = new Usuariom( req.body );

    usuariom.save(function(err) {
        if (err) {
            console.log('Error', err);
            return;
        }
        console.log("Usuario registrado satisfactoriamente");
        res.redirect("/usuarios/show/"+usuariom._id);
        //res.redirect("/usuarios");
    });
};


usuarioController.show = function (req,res) {

    Usuariom.findOne({_id: req.params.id }).exec(function(err,usuariom) {
        if (err) {
            console.log('Error', err);
            return;
        }
        res.render('../views/usuariom/show',{usuariom: usuariom})
    });
};

usuarioController.edit = function (req,res) {

    Usuariom.findOne({_id: req.params.id }).exec(function(err,usuariom) {
        if (err) {
            console.log('Error', err);
            return;
        }
        res.render('../views/usuariom/edit',{usuariom: usuariom})
    });
};

usuarioController.update = function(req,res) {

    Usuariom.findByIdAndUpdate( req.params.id, {$set: {
        nombre: req.body.nombre,
        username: req.body.username,
        correo: req.body.correo,
        celular: req.body.celular,
        preferencia: req.body.preferencia,
        edad: req.body.edad
    }}, { new : true}, 
        
    function( err, usuariom) {
        if( err ){
            console.log('Error: ', err);
            res.render('../views/usuariom/edit', {usuariom: req.body} );
        }
        
        console.log( usuariom );

        res.redirect('/usuarios/show/' + usuariom._id );
    });
};


usuarioController.delete = function (req,res) {

    Usuariom.remove( { _id: req.params.id} , function(err) {
        if (err) {
            console.log('Error', err);
            return;
        }
        console.log("Usuario eliminado")
        res.redirect('/usuarios');
    });
};


module.exports = usuarioController;