// Diferentes metodos y rutas relacionadas con nuestra API
"use strict";

const { query } = require("express");
var validator = require("validator");
const { default: isTaxID } = require("validator/lib/isTaxID");
const article = require("../models/article");
var Article = require("../models/article");

var controller = {
  datosCurso: (req, res) => {
    var hola = req.body.hola;

    return res.status(200).send({
      curso: "Master en Frameworks JS",
      author: "Julio Velezmoro",
      url: "google.com",
      hola,
    });
  },

  test: (req, res) => {
    return res.status(200).send({
      message: "Soy la accion test de mi controlador de articulos",
    });
  },

  save: (req, res) => {
    // Recoger parametros por post
    var params = req.body;
    console.log(params);

    // Validar datos(validator)
    try {
      var validate_title = !validator.isEmpty(params.title);
      var validate_content = !validator.isEmpty(params.content);
    } catch (err) {
      return res.status(200).send({
        status: "error",
        message: "Faltan datos por enviar",
      });
    }

    if (validate_content && validate_title) {
      // Crear el objeto a guardar
      var article = new Article();

      // Asignar valores
      article.title = params.title;
      article.content = params.content;
      article.image = null;

      // Guardar articulo
      article.save((err, articleStored) => {
        if (err || !articleStored) {
          return res.status(404).send({
            status: "error",
            message: "El articulo no se ha guardado",
          });
        }
        // Devolver respuesta
        return res.status(200).send({
          status: "success",
          article: articleStored,
        });
      });
    } else {
      return res.status(200).send({
        status: "error",
        message: "Los datos no son validos",
      });
    }
  },

  getArticles: (req, res) => {
    var query = Article.find({});

    var last = req.params.last;
    if (last || last != undefined) {
      query.limit(5);
    }

    // Find
    query.sort("-da2te").exec((err, articles) => {
      if (err) {
        return res.status(500).send({
          status: "error",
          message: "Error al devolver los articulos",
        });
      }
      if (!articles) {
        return res.status(404).send({
          status: "error",
          message: "Articulos no existen",
        });
      }

      return res.status(200).send({
        status: "success",
        articles,
      });
    });
  },

  getArticle: (req, res) => {
    // Recoger el id del url
    var articleId = req.params.id;
    // Comprobar que existen
    if (!articleId || articleId == null) {
      return res.status(404).send({
        status: "error",
        message: "No existe el articulo",
      });
    }
    // Buscar el articulo
    Article.findById(articleId, (err, article) => {
      if (err || !article) {
        return res.status(404).send({
          status: "error",
          message: "No existe el articulo",
        });
      }
      // Devolver un Json
      return res.status(404).send({
        status: "success",
        article,
      });
    });
  },

  update: (req, res) => {
    // Recoger el id del articulo por la url
    var articleId = req.params.id;

    // Recoger los datos que llegan por put
    var params = req.body;

    // Validar datos
    try {
      var validate_title = !validator.isEmpty(params.title);
      var validate_content = !validator.isEmpty(params.content);
    } catch (err) {
      return res.status(200).send({
        status: "error",
        message: "Faltan datos por enviar",
      });
    }
    if (validate_title && validate_content) {
      // Find ad update
      Article.findOneAndUpdate(
        { _id: articleId },
        params,
        { new: true },
        (err, articleUpdated) => {
          if (err) {
            return res.status(500).send({
              status: "error",
              message: "Error al actualizar",
            });
          }
          if (!articleUpdated) {
            return res.status(404).send({
              status: "error",
              message: "No existe el articulo",
            });
          }
          return res.status(200).send({
            status: "success",
            article: articleUpdated,
          });
        }
      );
    } else {
      // Devolver respuesta
      return res.status(200).send({
        status: "error",
        message: "La validacion no es correcta",
      });
    }
  },
  
  delete: (req, res) =>{
    return res.status(200).send({
        status: "error",
        message: "Faltan datos por enviar",
      }); 
  }
};
// End controller

module.exports = controller;
