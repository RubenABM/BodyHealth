var express = require('express');
var router = express.Router();
var ementasModel = require('../models/ementasModel');

//GET DE EMENTAS POR UTILIZADOR

router.get('/ementauser/:idutilizador', async function(req, res, next){

    let id_utilizador = req.params.idutilizador;
    console.log("[ementasRoutes] Retrieving meals from user " + id_utilizador);
    let result = await ementasModel.getEmentasUser(id_utilizador);
    res.status(result.status).send(result.data);
  
  });

//GET EMENTAS DE UM UTILIZADOR POR CATEGORIA

router.get('/categoryementauser/:idutilizador/:idcategoriaementa', async function(req, res, next){

    let id_utilizador = req.params.idutilizador;
    let id_categoria_ementa = req.params.idcategoriaementa;

    console.log("[ementasRoutes] Retrieving meals by category from user " + id_utilizador + "with category with id: " + id_categoria_ementa);

    let result = await ementasModel.getEmentasUserByCategory(id_utilizador, id_categoria_ementa);
    res.status(result.status).send(result.data);
  

});

module.exports = router;

//GET RECEITAS DE UMA EMENTA