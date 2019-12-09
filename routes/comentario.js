var express = require('express');
const router = express.Router();
const Products = require('../store/Products');
const mongoose = require('mongoose')
const Comment = require('../store/Comment');

var Schema = mongoose.Schema;
var userData = new Schema({
  author:String,
  prod:Number,
  comment:String});

var userData = mongoose.model('comments', userData)

// =========================================================================
// Retorna dados do produto selecionado 
// =========================================================================
router.get('/:id', function(req, res) {  
  var id = req.params.id;
      userData.find({prod:id})
      .then(function(doc){
        res.json(doc);        
      });
  });

   // =========================================================================
  //Recebe dados e realiza a alteração no banco de dados 
  // =========================================================================
    router.post('/new_comment/:id', function(req, res, next) {
      var dados = req.body;
      var id = req.params.id;
      //Inserindo comentários
      const com = new userData({ author: req.body.author, comment: req.body.comment, prod: req.body.prod });
      com.save().then(() => console.log(userData.db));
      res.redirect('/products/'+id);
    });

module.exports = router;
