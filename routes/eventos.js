var express = require('express');
var router = express.Router();
var eventosModel = require('../models/eventosModel');

router.get('/alleventos', async function (req, res, next){

    console.log("[eventosRoutes] Retrieving all eventos");
    let result = await eventosModel.getAllEventos();
    res.status(result.status).send(result.data);

  });

router.get('/eventosrecentes', async function(req, res, next) {

    let result = await eventosModel.getEventosRecentes();
    res.status(result.status).send(result.data); 

});

  router.get('/alleventos/:idutilizador', async function(req, res, next){

    let id_utilizador = req.params.idutilizador;
    console.log("[eventosRoutes] Retrieving eventos from user " + id_utilizador);
    let result = await eventosModel.getEventosUser(id_utilizador);
    res.status(result.status).send(result.data);
  
  });

  router.get('/alleventos/ordenareventos/:idutilizador', async function(req, res, next){

    let id_utilizador = req.params.idutilizador;
    console.log("[eventosRoutes] Retrieving eventos from user " + id_utilizador);
    let result = await eventosModel.getEventosOrdenadosUser(id_utilizador);
    res.status(result.status).send(result.data);
  
  });
   
  /* POST a new evento */
router.post('/insertnewevento', async function(req, res, next) {
    let newEvento = req.body;
    console.log("[eventosRoutes] Saving evento " + JSON.stringify(newEvento));
    let result = await eventosModel.saveEvento(newEvento);
    res.sendStatus(result.status).send(result.data);
  });
  
  //ORDENAR TODOS OS EVENTOS EXISTENTES NA PLATAFORMA

  router.get('/alleventos/ordenareventos/', async function(req, res, next){

    console.log("[eventosRoutes] Retrieving eventos");
    let result = await eventosModel.getEventosOrdenados();
    res.status(result.status).send(result.data);
  
  });

  //OBTER AS ULTIMAS AULAS MARCADAS

  router.get('/alleventos/aulas/:idutilizador', async function(req, res, next) {

    let id_utilizador = req.params.idutilizador;
    console.log("[eventosRoutes] Retrieving eventos from user " + id_utilizador);
    let result = await eventosModel.getUltimasAulas(id_utilizador);
    res.status(result.status).send(result.data);

  });

module.exports = router;
