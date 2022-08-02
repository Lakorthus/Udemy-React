// Diferentes metodos y rutas relacionadas con nuestra API
'use strict'

var controller ={

    datosCurso: (req,res)=>{
    
        var hola = req.body.hola;
    
        return res.status(200).send({
            curso: 'Master en Frameworks JS',
            author: 'Julio Velezmoro',
            url: 'google.com',
            hola
        });
    },

    test: (req,res) => {
        return res.status(200).send({
            message: 'Soy la accion test de mi controlador de articulos'
        });
    }
};
// End controller

module.exports = controller;