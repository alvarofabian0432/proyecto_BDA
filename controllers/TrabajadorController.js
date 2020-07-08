var mongoose = require('mongoose');
var Trabajadorm = require('../models/Trabajadorm');

var trabajadorController = {}

trabajadorController.list = function (req,res) {
    Trabajadorm.find({}).exec(function(err,trabajadores) {
        if (err) {
            console.log('Error', err);
            return;
        }
        res.render('../views/trabajadorm/index',{trabajadores: trabajadores})
    });
};

trabajadorController.create = function (req,res) {
    res.render('../views/trabajadorm/create');
};

trabajadorController.save = function (req,res) {
    var trabajadorm = new Trabajadorm( req.body );

    trabajadorm.save(function(err) {
        if (err) {
            console.log('Error', err);
            return;
        }
        console.log("Trabajador registrado satisfactoriamente");
        res.redirect("/trabajadores/show/"+trabajadorm._id);
        //res.redirect("/trabajadores");
    });
};


trabajadorController.show = function (req,res) {

    Trabajadorm.findOne({_id: req.params.id }).exec(function(err,trabajadorm) {
        if (err) {
            console.log('Error', err);
            return;
        }
        res.render('../views/trabajadorm/show',{trabajadorm: trabajadorm})
    });
};

trabajadorController.edit = function (req,res) {

    Trabajadorm.findOne({_id: req.params.id }).exec(function(err,trabajadorm) {
        if (err) {
            console.log('Error', err);
            return;
        }
        res.render('../views/trabajadorm/edit',{trabajadorm: trabajadorm})
    });
};

trabajadorController.update = function(req,res) {

    Trabajadorm.findByIdAndUpdate( req.params.id, {$set: {
        nombre: req.body.nombre,
        username: req.body.username,
        correo: req.body.correo,
        celular: req.body.celular,
        cargo: req.body.cargo,
        area: req.body.area

    }}, { new : true}, 
        
    function( err, trabajadorm) {
        if( err ){
            console.log('Error: ', err);
            res.render('../views/trabajadorm/edit', {trabajadorm: req.body} );
        }
        
        console.log( trabajadorm );

        res.redirect('/trabajadores/show/' + trabajadorm._id );
    });
};


trabajadorController.delete = function (req,res) {

    Trabajadorm.remove( { _id: req.params.id} , function(err) {
        if (err) {
            console.log('Error', err);
            return;
        }
        console.log("Trabajador eliminado")
        res.redirect('/trabajadores');
    });
};


module.exports = trabajadorController;