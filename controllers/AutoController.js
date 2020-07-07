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
    })
};

autoController.create = function (req,res) {
    res.render('../views/autom/create');
};

module.exports = autoController;