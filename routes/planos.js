var express = require('express');
var router = express.Router();
var planosModel = require('../models/planosModel');

//GET DE UM PLANO ESPECIFICO

router.get('/:idplano', async function(req, res, next){

    let id_plano = req.params.idplano;
    console.log("[planosRoutes] Retrieving plan from with ID: " + id_plano);
    let result = await planosModel.getPlanoById(id_plano);
    res.status(result.status).send(result.data);
  
  });

  router.get('/allplanostreino', async function (req, res, next){

    console.log("[recipesRoutes] Retrieving all planos");
    let result = await planosModel.getAllPlano();
    res.status(result.status).send(result.data);
  
  });

  router.get('/all', async function(req, res, next) {

    let result = await planosModel.getAll();
    res.sendStatus(result.status).send(result.data);

  });
  

//OBTER PLANOS FAVORITOS


  router.get('/planouser/:idutilizador', async function(req, res, next){

    let id_utilizador = req.params.idutilizador;
    console.log("[planosRoutes] Retrieving planos from user " + id_utilizador);
    let result = await planosModel.getPlanosUser(id_utilizador);
    res.status(result.status).send(result.data);
  
  });


  router.post('/insertnewplano', async function(req, res, next) {
    let newPlano = req.body;
    console.log("[planosRoutes] Saving plano " + JSON.stringify(newPlano));
    let result = await planosModel.savePlano(newPlano);
    res.sendStatus(result.status).send(result.data);
  });

  router.get('/getexercises/:idplanotreino', async function(req, res, next){
  
    let id_plano = req.params.idplanotreino;
   
    let result = await planosModel.getPlanosExercises(id_plano);
    res.status(result.status).send(result.data);

  });

  router.post('/insertnewfavoriteplano', async function(req, res, next) {
    let newPlano = req.body;
    console.log("[planosRoutes] Saving plano " + JSON.stringify(newPlano));
    let result = await planosModel.savePlanoFavorite(newPlano);
    res.sendStatus(result.status).send(result.data);
  });

  router.put('/updatemarcacao/remarcar/:idutilizador/:idplano', async function(req, res, next){

    let id = req.params.idplano; 
    let id_user = req.params.idutilizador;
    console.log("[usersRoutes] Retrieving user with id " + id);
    let result = await planosModel.UpdateMarcacao(id, id_user);
    res.status(result.status).send(result.data);


  });

  router.put('/updatemarcacao/desmarcar/:idutilizador/:idplano', async function(req, res, next){

    let id = req.params.idplano; 
    let id_user = req.params.idutilizador;
    console.log("[usersRoutes] Retrieving user with id " + id);
    let result = await planosModel.UpdateDesmarcacao(id, id_user);
    res.status(result.status).send(result.data);


  });



  router.delete('/deleteplano/:idplano', async function(req, res, next){

    let plano_id = req.params.idplano;
    console.log("[artigosRoutes] Deleting plano with id: " + plano_id);
    let result = await planosModel.DeletePlano(plano_id);
    res.status(result.status).send(result.data);
  
  });



  module.exports = router;