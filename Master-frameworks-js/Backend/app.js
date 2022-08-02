'use strict'

// cargar modulos de node
var express = require('express');
var bodyParser = require('body-parser');

// ejecutar express (http)
var app = express();
// cargar ficheros rutas

// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS


// añadir prefijos a rutas

// ruta o metodo de  prueba para el API REST
app.get('/test',(req,res)=>{
    
    return res.status(200).send({
        curso: 'Master en Frameworks JS',
        author: 'Julio Velezmoro',
        url: 'google.com'
    });
});

// exportar modulo(fichero actual)
module.exports = app;