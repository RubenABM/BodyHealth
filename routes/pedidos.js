///////////////////////VER LINHA 35//////////////////////////////////7

var express = require('express');
var router = express.Router();
var pedidosModel = require('../models/pedidosModel');

/*
router.get('/allpedidos/:idutilizador', async function (req, res, next){

    let id_utilizador = req.params.idutilizador;
    console.log("[pedidosRoutes] Retrieving all pedidos from user id: " + id_utilizador);
    let result = await pedidosModel.getAllPedidos(id_utilizador);
    res.status(result.status).send(result.data);

});
*/

router.get('/allpedidoslimit/:idutilizador', async function (req, res, next){

    let id_utilizador = req.params.idutilizador;
    console.log("[pedidosRoutes] Retrieving all pedidos from user id: " + id_utilizador);
    let result = await pedidosModel.getAllPedidosLimit(id_utilizador);
    res.status(result.status).send(result.data);

});

//OBTER CONSULTAS MARCADAS DUM NUTRICIONISTA

router.get('/allconsultas/:idutilizador/', async function (req, res, next){

  let id_utilizador = req.params.idutilizador;
  console.log("[pedidosRoutes] Retrieving all pedidos from user id: " + id_utilizador);
  let result = await pedidosModel.getAllConsultasNut(id_utilizador);
  res.status(result.status).send(result.data);

});


//OBTER AULAS MARCADAS DUM PT

router.get('/allaulas/:idutilizador/', async function (req, res, next){

  let id_utilizador = req.params.idutilizador;
  console.log("[pedidosRoutes] Retrieving all pedidos from user id: " + id_utilizador);
  let result = await pedidosModel.getAllAulasNut(id_utilizador);
  res.status(result.status).send(result.data);

});


router.get('/allpedidos/:idutilizador/', async function (req, res, next){

  let id_utilizador = req.params.idutilizador;
  console.log("[pedidosRoutes] Retrieving all pedidos from user id: " + id_utilizador);
  let result = await pedidosModel.getAllPedidosList(id_utilizador);
  res.status(result.status).send(result.data);

});


//OBTER TODOS OS PEDIDOS PENDENTES DE UM NUTRICIONISTA --> TERMINAR /////////////////////////////////////////////

router.get('/allpedidospendentess/:idutilizador/', async function (req, res, next){

  let id_utilizador = req.params.idutilizador;
  console.log("[pedidosRoutes] Retrieving all pedidos from user id: " + id_utilizador);
  let result = await pedidosModel.getAllPedidosListPendentesFromNut(id_utilizador);
  res.status(result.status).send(result.data);

});

router.get('/alleventosmarcados/:idutilizador', async function(req, res, next) {

  let id_utilizador = req.params.idutilizador;
  console.log("[pedidosRoutes] Retrieving all pedidos from user id: " + id_utilizador);
  let result = await pedidosModel.getAllEventosMarcados(id_utilizador);
  res.status(result.status).send(result.data);

});


router.get('/alleventosmarcados/filtragem/:idutilizador/:idtipo', async function(req, res, next) {

  let id_tipo = req.params.idtipo;
  let id_utilizador = req.params.idutilizador;
  console.log("[pedidosRoutes] Retrieving all pedidos from user id: " + id_utilizador);
  let result = await pedidosModel.getAllEventosMarcadosCategory(id_utilizador, id_tipo);
  res.status(result.status).send(result.data);

});

router.get('/alleventosmarcados/filtragemestado/:idutilizador/:idtipo', async function(req, res, next) {

  let id_tipo = req.params.idtipo;
  let id_utilizador = req.params.idutilizador;
  console.log("[pedidosRoutes] Retrieving all pedidos from user id: " + id_utilizador);
  let result = await pedidosModel.getAllEventosMarcadosEstado(id_utilizador, id_tipo);
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


  
  router.delete('/deletepedido/:idpedido', async function(req, res, next){

    let pedido_id = req.params.idpedido;
    console.log("[artigosRoutes] Deleting pedido with id: " + pedido_id);
    let result = await pedidosModel.DeletePedido(pedido_id);
    res.status(result.status).send(result.data);
  
  });

  
router.put('/aceitar/:idpedido', async function(req, res, next){

    let pedido_id = req.params.idpedido;
    console.log("[artigosRoutes] Update pedido with id: " + pedido_id);
    let result = await pedidosModel.UpdateAceitarPedido(pedido_id);
    res.status(result.status).send(result.data);
  
  });

  
  router.put('/recusar/:idpedido', async function(req, res, next){

    let pedido_id = req.params.idpedido;
    console.log("[artigosRoutes] Update pedido with id: " + pedido_id);
    let result = await pedidosModel.UpdateRecusarPedido(pedido_id);
    res.status(result.status).send(result.data);
  
  });


module.exports = router;


