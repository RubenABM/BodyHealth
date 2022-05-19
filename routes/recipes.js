var express = require('express');
var router = express.Router();
var recipesModel = require('../models/recipesModel');

router.get('/categoryrecipe/:id', async function(req, res, next){

    let cat_id = req.params.id;
    console.log("[recipesRoutes] Retrieving recipes with category " + cat_id);
    let result = await placesModel.getPlacesCategory(cat_id);
    res.status(result.status).send(result.data);
  
  });

  router.get('/allrecipes', async function (req, res, next){

    console.log("[recipesRoutes] Retrieving all recipes");
    let result = await recipesModel.getAllRecipes();
    res.status(result.status).send(result.data);

  });

//GET DE UMA RECEITA ESPECIFICA

router.get('/:idreceita', async function(req, res, next){

  let id_receita = req.params.idreceita;
  console.log("[recipesRoutes] Retrieving recipe from with ID: " + id_receita);
  let result = await recipesModel.getRecipeById(id_receita);
  res.status(result.status).send(result.data);

});


//GET DE RECEITAS POR UTILIZADOR

router.get('/recipeuser/:idutilizador', async function(req, res, next){

    let id_utilizador = req.params.idutilizador;
    console.log("[recipesRoutes] Retrieving recipes from user " + id_utilizador);
    let result = await recipesModel.getRecipesUser(id_utilizador);
    res.status(result.status).send(result.data);
  
  });

  //FILTRAGEM DE CATEGORIAS DAS RECEITAS DE UM UTILIZADOR

router.get('/categoryrecipeuser/:idutilizador/:idcategoria', async function(req, res, next){

     let id_utilizador = req.params.idutilizador;
     let id_categoria = req.params.idcategoria;

     console.log("[recipesRoutes] Retrieving recipes by category from user " + id_utilizador + "with category with id: " + id_categoria);

     let result = await recipesModel.getRecipesUserByCategory(id_utilizador, id_categoria);
     res.status(result.status).send(result.data);
   

});

router.get('/allrecipes/:idcategoria', async function(req, res, next) {

   let id_categoria = req.params.idcategoria;

   let result = await recipesModel.getRecipesByCategory(id_categoria);
   res.status(result.status).send(result.data);

});

router.get('/allrecipes/category/:idcategory', async function(req, res, next){

  let id_categoria = req.params.idcategory;

  let result = await recipesModel.getRecipesByCategory2(id_categoria);
  res.status(result.status).send(result.data);

});

//OBTER OS INGREDIENTES DE UMA RECEITA ESPECIFICA

router.get('/receitasingredientes/:idreceita', async function(req, res, next){

    let id_receita = req.params.idreceita;

    console.log("[recipesRoutes] Retrieving ingredients from recipe " + id_receita);

    let result = await recipesModel.getRecipesIngredients(id_receita);
    res.status(result.status).send(result.data);

});

//POST RECIPE

/* POST a new recipe */
router.post('/insertnewrecipe', async function(req, res, next) {
  let newRecipe = req.body;
  console.log("[recipesRoutes] Saving recipe " + JSON.stringify(newRecipe));
  let result = await recipesModel.saveRecipe(newRecipe);
  res.sendStatus(result.status).send(result.data);
});



module.exports = router;
