var express = require('express');
var router = express.Router();

var usuariom = require('../controllers/UsuarioController');

router.get('/', usuariom.list);
router.get('/create', usuariom.create);
router.post('/save', usuariom.save);
router.get('/show/:id', usuariom.show);
router.get('/edit/:id', usuariom.edit);
router.post('/update/:id', usuariom.update);
router.post('/delete/:id', usuariom.delete);

module.exports = router;