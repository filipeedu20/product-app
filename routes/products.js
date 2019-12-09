var express = require('express');
const router = express.Router();
const Products = require('../store/Products');
const mongoose = require('mongoose')

// =========================================================================
// Retorna dados do produto selecionado 
// =========================================================================
router.get('/:id', function(req, res) {    
  Products.get_where(id)
    var id = req.params.id;
    Products.get_where(id)
      .then(function(products) { 
         res.render('products', { products} );
     }) 
});

// =========================================================================
// Fomulário para alteração dos dados 
// =========================================================================
router.get('/alterar/:id', function(req, res) {
    var id = req.params.id;
    Products.get_where(id)
      .then(function(products) {          
      //   res.json(products);  
      res.render('alterar', { products });
      })    
  });
  //=========================================================================
  //Recebe dados e realiza a alteração no banco de dados 
  // =========================================================================
  router.post('/alterar_produto/', function(req, res, next) {
  var dados = req.body;
  var idProduto = req.params.id;

  Products.update(dados)
  .then(function(products) {      
      // res.render('index', { products });
      res.redirect('/products/'+dados.id);
    })  
  });

  //=========================================================================
  // Remoçao de registro
  // =========================================================================
  router.get('/remove_product/:id', function(req, res, next) {
    var idProduto = req.params.id;         
    Products.delete(idProduto)
    .then(function() {
      res.redirect('/');
    })
    console.log(Products);
  });
module.exports = router;
