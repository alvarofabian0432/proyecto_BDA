var express = require('express');
var router = express.Router();

var autom = require('../controllers/AutoController');

router.get('/', autom.list);
router.get('/create', autom.create);

module.exports = router;