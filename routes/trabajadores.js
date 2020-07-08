var express = require('express');
var router = express.Router();

var trabajadorm = require('../controllers/TrabajadorController');

router.get('/', trabajadorm.list);
router.get('/create', trabajadorm.create);
router.post('/save', trabajadorm.save);
router.get('/show/:id', trabajadorm.show);
router.get('/edit/:id', trabajadorm.edit);
router.post('/update/:id', trabajadorm.update);
router.post('/delete/:id', trabajadorm.delete);

module.exports = router;