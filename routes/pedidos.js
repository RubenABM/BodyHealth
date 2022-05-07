var express = require('express');
var router = express.Router();
var pedidosModel = require('../models/pedidosModel');

router.get('/allpedidos/:idutilizador', async function (req, res, next){

    let id_utilizador = req.params.idutilizador;
    console.log("[pedidosRoutes] Retrieving all pedidos from user id: " + id_utilizador);
    let result = await pedidosModel.getAllPedidos(id_utilizador);
    res.status(result.status).send(result.data);

});

/*OBTER PEDIDOS POR CATEGORIA (AULA OU CONSULTA)*/ 

router.get('/getpedidos/:idutilizador/:pedidocategoria', async function(req, res, next){

    let id_utilizador = req.params.idutilizador;
    let id_categoria = req.params.pedidocategoria;
    console.log("[pedidosRoutes] Retrieving all pedidos from user id: " + id_utilizador + "and category id: " + id_categoria);
    let result = await pedidosModel.getAllPedidosByCategory(id_utilizador, id_categoria);
    res.status(result.status).send(result.data);

});

/*OBTER PEDIDOS POR CATEGORIA (AULA OU CONSULTA) E ORDENÁ-LOS*/ 

router.get('/getpedidos/:idutilizador/:pedidocategoria', async function(req, res, next){

    let id_utilizador = req.params.idutilizador;
    let id_categoria = req.params.pedidocategoria;
    console.log("[pedidosRoutes] Retrieving all pedidos from user id: " + id_utilizador + "and category id: " + id_categoria);
    let result = await pedidosModel.getAllPedidosByCategoryOrdered(id_utilizador, id_categoria);
    res.status(result.status).send(result.data);

});

/*CRIAR NOVO PEDIDO*/

/* POST a new recipe */
router.post('/insertnewpedido', async function(req, res, next) {
    let newPedido = req.body;
    console.log("[pedidosRoutes] Saving pedido " + JSON.stringify(newPedido));
    let result = await pedidosModel.savePedido(newPedido);
    res.sendStatus(result.status).send(result.data);
  });


module.exports = router;

