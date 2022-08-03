// Diferentes metodos y rutas relacionadas con nuestra API
"use strict";

var validator = require("validator");
var fs = require("fs");
var path = require("path");
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

  delete: (req, res) => {
    // Recoger el id de la url
    var articleId = req.params.id;

    // Find and delete
    Article.findOneAndDelete({ _id: articleId }, (err, articleRemoved) => {
      if (err) {
        return res.status(500).send({
          status: "error",
          message: "Error al borrar",
        });
      }
      if (!articleRemoved) {
        return res.status(404).send({
          status: "error",
          message: "No se ha borrado articulo, posiblemente no existe",
        });
      }
      return res.status(200).send({
        status: "success",
        article: articleRemoved,
      });
    });
  },
  upload: (req, res) => {
    // Configurar el modulo connect multiparty router/article.js

    // Recoger el fichero de la peticion
    var file_name = "Imagen no subida";

    if (!req.files) {
      return res.status(404).send({
        status: "error",
        message: file_name,
      });
    }
    // Conseguir el nombre y la ext del archivo
    var file_path = req.files.file0.path;
    var file_split = file_path.split("/");

    // * ADVERTENCIA * EN WINDOWS
    // var file_split = file_path.split('\\');

    // Nombre del archivo
    var file_name = file_split[2];

    // Extencion del fichero
    var extension_split = file_name.split(".");
    var file_ext = extension_split[1];

    // Comprobar la extension, solo imagenes, si no es valida borrar fichero
    if (
      file_ext != "png" &&
      file_ext != "jpg" &&
      file_ext != "jpeg" &&
      file_ext != "gif"
    ) {
      // Borrar achivo subido
      fs.unlink(file_path, (err) => {
        return res.status(200).send({
          status: "error",
          message: "La ext de la imagen no es valida",
        });
      });
    } else {
      // Sacando id de url
      var articleId = req.params.id;
      // Si todo es valido buscar el articulo, asignarle el nombre de la imagen y actualizarlo
      Article.findOneAndUpdate(
        { _id: articleId },
        { image: file_name },
        { new: true },
        (err, articleUpdated) => {
          if (err || !articleUpdated) {
            return res.status(200).send({
              status: "error",
              message: "Error al guardar la imagen de articulo",
            });
          } else {
            return res.status(200).send({
              status: "success",
              article: articleUpdated,
            });
          }
        }
      );
    }
  },
  getImage: (req, res) => {
    //obtener el fichero que se pide por URL
    let file = req.params.image;
    let path_file = "./upload/articles/" + file;

    // comprobar si el archivo existe
    fs.access(path_file, fs.constants.F_OK, (err) => {
      if (err) {
        return res.status(404).send({
          status: "error",
          message: "La imagen no existe !!!",
        });
      } else {
        //devolvemos el fichero, para incrustarlo en etiquetas de imagen
        return res.sendFile(path.resolve(path_file));
      }
    });
  },
  search: (req, res) => {
    // Sacar el string a buscar
    var searchString = req.params.search;

    // Find or
    Article.find({
      $or: [
        { title: { $regex: searchString, $options: "i" } },
        { content: { $regex: searchString, $options: "i" } },
      ],
    })
      .sort([["date", "descending"]])
      .exec((err, articles) => {
        if (err) {
          return res.status(500).send({
            status: "error",
            message: "Error en la peticion",
          });
        } 
        if(!articles || articles.length <= 0) {
          return res.status(404).send({
            status: "error",
            message: "No hay articulos para mostrar",
          });
        }
        return res.status(200).send({
          status: "success",
          articles,
        });
      });
  },
};
// End controller

module.exports = controller;
