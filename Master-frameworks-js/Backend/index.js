"use strict";

var mongoose = require("mongoose");
var app = require('./app');
var port = 3900;

// mongoose.set('useFindAndModify', false); <-depreciado
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/api_rest_blog", { useNewUrlParser: true })
  .then(() => {
    console.log("Conexion se ha ejecutado correctamente");


    // crear servidor y poner a escuchar peticiones HTTP
    app.listen(port,()=>{
        console.log('Servidor corriendo en http://localhost:'+port);
    });

  });
