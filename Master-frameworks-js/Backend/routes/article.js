// 

'use strict'

var express = require('express');
var articleController = require('../controllers/article');

var router = express.Router()

// Rutas de prueba
router.post('/datos-curso',articleController.datosCurso);
router.get('/test-controller',articleController.test);

// Rutas utiles
router.post('/save',articleController.save);
router.get('/articles/:last?',articleController.getArticles);
router.get('/article/:id',articleController.getArticle);
router.put('/article/:id',articleController.update);
router.delete('/article/:id',articleController.delete);

module.exports = router;