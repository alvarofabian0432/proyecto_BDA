var express = require('express');
var router = express.Router();

var autom = require('../controllers/AutoController');

router.get('/', autom.list);
router.get('/create', autom.create);
router.post('/save', autom.save);
router.get('/show/:id', autom.show);
router.get('/edit/:id', autom.edit);
router.post('/update/:id', autom.update);
router.post('/delete/:id', autom.delete);

module.exports = router;