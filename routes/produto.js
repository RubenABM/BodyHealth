var express = require('express');
var router = express.Router();
var produtoModel = require('../models/produtoModel');

router.get('/store/allprodutos', async function (req, res, next){

    console.log("[produtosRoutes] Retrieving all products");
    let result = await produtoModel.getAllProducts();
    res.status(result.status).send(result.data);

  });

  router.get('/store/calcado', async function(req, res, next) {

    let result = await produtoModel.getAllCalcado();
    res.status(result.status).send(result.data);


  });

  router.get('/store/sportswear', async function(req, res, next) {

    let result = await produtoModel.getAllSportswear();
    res.status(result.status).send(result.data);


  });

  router.get('/store/equipamento', async function(req, res, next) {

    let result = await produtoModel.getAllEquipamento();
    res.status(result.status).send(result.data);


  });

  router.get('/store/suplemento', async function(req, res, next) {

    let result = await produtoModel.getAllSuplemento();
    res.status(result.status).send(result.data);


  });

  router.get('/store/someprodutos/', async function(req, res, next){

     let result = await produtoModel.getSomeProdutos();
     res.status(result.status).send(result.data);

  });

  router.get('/store/filterproducts/:produto_categoria_id', async function(req, res, next) {

    let categoria_id = req.params.produto_categoria_id;
    console.log("[produtosRoutes] Retrieving products from class with category id: " + categoria_id);
    let result = await produtoModel.getProductCategory(categoria_id);
    res.status(result.status).send(result.data);

  });

  /* POST a new product to getlist */
router.post('/insertnewproducttolist', async function(req, res, next) {
    let newProductList = req.body;
    console.log("[produtosRoutes] Saving product " + JSON.stringify(newProductList));
    let result = await produtoModel.saveProductList(newProductList);
    res.sendStatus(result.status).send(result.data);
  });


  
  module.exports = router;