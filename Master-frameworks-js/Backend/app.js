'use strict'

// cargar modulos de node
var express = require('express');
var bodyParser = require('body-parser');

// ejecutar express (http)
var app = express();
// cargar ficheros rutas
var article_routes = require('./routes/article');

// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS


// Añadir prefijos a rutas / Cargar Rutas
app.use('/api',article_routes);

// ruta o metodo de  prueba para el API REST
/* fue remplasado por nuestro modelo
app.post('/test',(req,res)=>{
    
    var hola = req.body.hola;

    return res.status(200).send({
        curso: 'Master en Frameworks JS',
        author: 'Julio Velezmoro',
        url: 'google.com',
        hola
    });
});
*/
// exportar modulo(fichero actual)
module.exports = app;