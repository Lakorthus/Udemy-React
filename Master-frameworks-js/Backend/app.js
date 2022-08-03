"use strict";

// cargar modulos de node
var express = require("express");
var bodyParser = require("body-parser");

// ejecutar express (http)
var app = express();
// cargar ficheros rutas
var article_routes = require("./routes/article");

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Añadir prefijos a rutas / Cargar Rutas
app.use("/api", article_routes);

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
