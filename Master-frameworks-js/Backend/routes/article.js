// 

'use strict'

var express = require('express');
var articleController = require('../controllers/article');

var router = express.Router()

router.post('/datos-curso',articleController.datosCurso);
router.get('/test-controller',articleController.test);

module.exports = router;