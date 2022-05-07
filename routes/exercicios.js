var express = require('express');
var router = express.Router();
var exercicioModel = require('../models/exercicioModel');

//OBTER (DETALHES) EXERCICIO ESPECIFICO PELO SEU ID

//GET DE UM EXERCICIO ESPECIFICO

router.get('/:idexercicio', async function(req, res, next){

    let id_exercicio = req.params.idexercicio;
    console.log("[exerciciosRoutes] Retrieving exercise from with ID: " + id_exercicio);
    let result = await exercicioModel.getExerciseById(id_exercicio);
    res.status(result.status).send(result.data);
  
  });

  //GET DE EXERCICIOS POR UTILIZADOR

router.get('/exerciseuser/:idutilizador', async function(req, res, next){

    let id_utilizador = req.params.idutilizador;
    console.log("[exerciciosRoutes] Retrieving exercises from user " + id_utilizador);
    let result = await exercicioModel.getExercisesUser(id_utilizador);
    res.status(result.status).send(result.data);
  
  });

    //FILTRAGEM DE CATEGORIAS DOS EXERCICIOS DE UM UTILIZADOR

router.get('/categoryexerciseuser/:idutilizador/:idcategoria', async function(req, res, next){

    let id_utilizador = req.params.idutilizador;
    let id_categoria = req.params.idcategoria;

    console.log("[recipesRoutes] Retrieving exercises by category from user " + id_utilizador + "with category with id: " + id_categoria);

    let result = await exercicioModel.getExercisesUserByCategory(id_utilizador, id_categoria);
    res.status(result.status).send(result.data);
  

});

//POST EXERCISE

/* POST a new exercise */
router.post('/insertnewexercise', async function(req, res, next) {
    let newExercise = req.body;
    console.log("[recipesRoutes] Saving exercise " + JSON.stringify(newExercise));
    let result = await exercicioModel.saveExercise(newExercise);
    res.sendStatus(result.status).send(result.data);
  });
  


module.exports = router;