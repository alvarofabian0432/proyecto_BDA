var mongoose = require('mongoose');
var Autom = require('../models/Autom');

var autoController = {}

autoController.list = function (req,res) {
    Autom.find({}).exec(function(err,autos) {
        if (err) {
            console.log('Error', err);
            return;
        }
        res.render('../views/autom/index',{autos: autos})
    });
};

autoController.create = function (req,res) {
    res.render('../views/autom/create');
};

autoController.save = function (req,res) {
    var autom = new Autom( req.body );

    autom.save(function(err) {
        if (err) {
            console.log('Error', err);
            return;
        }
        console.log("Auto registrado satisfactoriamente");
        res.redirect("/autos/show/"+autom._id);
        //res.redirect("/autos");
    });
};


autoController.show = function (req,res) {

    Autom.findOne({_id: req.params.id }).exec(function(err,autom) {
        if (err) {
            console.log('Error', err);
            return;
        }
        res.render('../views/autom/show',{autom: autom})
    });
};

autoController.edit = function (req,res) {

    Autom.findOne({_id: req.params.id }).exec(function(err,autom) {
        if (err) {
            console.log('Error', err);
            return;
        }
        res.render('../views/autom/edit',{autom: autom})
    });
};

autoController.update = function(req,res) {

    Autom.findByIdAndUpdate( req.params.id, {$set: {
        nombre: req.body.nombre,
        marca: req.body.marca,
        color: req.body.color,
        estado: req.body.estado,
        stock: req.body.stock,
        capacidad: req.body.capacidad
    }}, { new : true}, 
        
    function( err, autom) {
        if( err ){
            console.log('Error: ', err);
            res.render('../views/autom/edit', {autom: req.body} );
        }
        
        console.log( autom );

        res.redirect('/autos/show/' + autom._id );
    });
};


autoController.delete = function (req,res) {

    Autom.remove( { _id: req.params.id} , function(err) {
        if (err) {
            console.log('Error', err);
            return;
        }
        console.log("Auto eliminado")
        res.redirect('/autos');
    });
};


module.exports = autoController;