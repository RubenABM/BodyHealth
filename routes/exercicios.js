var express = require('express');
var router = express.Router();
var exercicioModel = require('../models/exercicioModel');

router.get('/allexercicios', async function (req, res, next){

  console.log("[recipesRoutes] Retrieving all exercicios");
  let result = await exercicioModel.getAllExercise();
  res.status(result.status).send(result.data);

});

router.get('/allexercicios/:idutilizador', async function(req, res, next) {

   let id_utilizador = req.params.idutilizador;
   let result = await exercicioModel.getAllExerciseUtilizador(id_utilizador);
   res.status(result.status).send(result.data);


});


router.get('/allexercicios2', async function (req, res, next){

  console.log("[recipesRoutes] Retrieving all exercicios");
  let result = await exercicioModel.getAllExercise2();
  res.status(result.status).send(result.data);

});

router.get('/allexercicios/someexercicios/', async function(req, res, next) {

   let result = await exercicioModel.getSomeExercicios();
   res.status(result.status).send(result.data);

});

router.get('/allexercicios/category/:idcategoria', async function (req, res, next){

  let id_categoria = req.params.idcategoria;
  console.log("[recipesRoutes] Retrieving all meals");
  let result = await exercicioModel.getExerciseByCategory(id_categoria);
  res.status(result.status).send(result.data);

});

router.get('/allexercicios/categoryy/:idcategoria', async function (req, res, next){

  let id_categoria = req.params.idcategoria;
  console.log("[recipesRoutes] Retrieving all meals");
  let result = await exercicioModel.getExerciseByCategoryy(id_categoria);
  res.status(result.status).send(result.data);

});

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

router.get('/showexercicio', async function(req, res, next){

  let result = await exercicioModel.getSomeExercicioo();
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

  
  router.delete('/deleteexercise/:idexercise', async function(req, res, next){

    let exercicio_id = req.params.idexercise;
    console.log("[artigosRoutes] Deleting ementa with id: " + exercicio_id);
    let result = await exercicioModel.DeleteExercise(exercicio_id);
    res.status(result.status).send(result.data);
  
  });



  router.post('/insertnewexercisefavorito', async function(req, res, next) {
    let newExercise = req.body;
    console.log("[recipesRoutes] Saving favorite " + JSON.stringify(newExercise));
    let result = await exercicioModel.saveExerciseFavorito(newExercise);
    res.sendStatus(result.status).send(result.data);
  });
  

  /*DESMARCAR EXERCICIO COMO FAVORITO*/

router.put('/desmarcar/:idexercicio/:idutilizador', async function(req, res, next){

  let utilizador_id = req.params.idutilizador;
  let exercicio_id = req.params.idexercicio;
  console.log("[artigosRoutes] Update favorite: " + utilizador_id + "|" + exercicio_id);
  let result = await exercicioModel.UpdateFavorito(exercicio_id, utilizador_id);
  res.status(result.status).send(result.data);

});

router.put('/remarcar/:idexercicio/:idutilizador', async function(req, res, next){

  let utilizador_id = req.params.idutilizador;
  let exercicio_id = req.params.idexercicio;
  console.log("[artigosRoutes] Update favorite: " + utilizador_id + "|" + exercicio_id);
  let result = await exercicioModel.UpdateFavoritoRemarcar(exercicio_id, utilizador_id);
  res.status(result.status).send(result.data);

});

module.exports = router;