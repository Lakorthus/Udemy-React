'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema = Schema({
    title: String,
    content: String,
    date: {type: Date, default: Date.now},
    image: String
});

module.exports = mongoose.model('Article', articleSchema);
// moongose va a guarddar el documento y si es mas de uno lo va a pluralizar en minusculas "articles" -> guarda documentos de este tipo con estructura dentro de la coleccion
