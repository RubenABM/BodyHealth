var express = require('express');
var router = express.Router();
var ementasModel = require('../models/ementasModel');

//OBTER TODAS AS EMENTAS

router.get('/allementas', async function (req, res, next){

  console.log("[recipesRoutes] Retrieving all meals");
  let result = await ementasModel.getAllMeals();
  res.status(result.status).send(result.data);

});

router.get('/allementas/category/:idcategoria', async function (req, res, next){

  let id_categoria = req.params.idcategoria;
  console.log("[recipesRoutes] Retrieving all meals");
  let result = await ementasModel.getMealsByCategory(id_categoria);
  res.status(result.status).send(result.data);

});

router.get('/allementas/base/:idbase', async function (req, res, next){

  let id_base = req.params.idbase;
  console.log("[recipesRoutes] Retrieving all meals");
  let result = await ementasModel.getMealsByBase(id_base);
  res.status(result.status).send(result.data);

});

//GET RECEITAS DUMA EMENTA


router.get('/allreceitasfromementa/:idementa', async function(req, res, next){

  let id_ementa = req.params.idementa;
  console.log("[ementasRoutes] Retrieving meals from user " + id_ementa);
  let result = await ementasModel.getRecipesFromEmenta(id_ementa);
  res.status(result.status).send(result.data);

});

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

//GET FAVORITOS EMENTAS


router.get('/myfavorites/:idutilizador', async function(req, res, next){

  let id_utilizador = req.params.idutilizador;
  console.log("[ementasRoutes] Retrieving meals from user " + id_utilizador);
  let result = await ementasModel.getEmentasFavorites(id_utilizador);
  res.status(result.status).send(result.data);

});



/*OBTER DETALHES DE UMA EMENTA*/

router.get('/ementadetails/:idementa', async function(req, res, next){

  let id_ementa = req.params.idementa;
  console.log("[ementasRoutes] Retrieving meals from user " + id_ementa);
  let result = await ementasModel.getEmentasDetails(id_ementa);
  res.status(result.status).send(result.data);

});


/* POST a new ementa */
router.post('/insertnewementa', async function(req, res, next) {
  let newEmenta = req.body;
  console.log("[recipesRoutes] Saving recipe " + JSON.stringify(newEmenta));
  let result = await ementasModel.saveEmenta(newEmenta);
  res.status(result.status).send(result.data);
});

//GET RECEITAS DE UMA EMENTA

router.get('/ementareceita/:idementa', async function(req, res, next){

  let id_ementa = req.params.idementa;
  console.log("[ementasRoutes] Retrieving recipes from meal " + id_ementa);
  let result = await ementasModel.getEmentasRecipes(id_ementa);
  res.status(result.status).send(result.data);

});

//APAGAR UMA EMENTA

router.delete('/deleteementa/:idementa', async function(req, res, next){

  let ementa_id = req.params.idementa;
  console.log("[artigosRoutes] Deleting ementa with id: " + ementa_id);
  let result = await ementasModel.DeleteEmenta(ementa_id);
  res.status(result.status).send(result.data);

});

//MARCAR EMENTA COMO FAVORITO (PELA PRIMEIRA VEZ)

/* POST a new ementa */
router.post('/insertnewementafavorito', async function(req, res, next) {
  let newEmenta = req.body;
  console.log("[recipesRoutes] Saving recipe " + JSON.stringify(newEmenta));
  let result = await ementasModel.saveEmentaFavorito(newEmenta);
  res.sendStatus(result.status).send(result.data);
});

/*DESMARCAR EMENTA COMO FAVORITO*/

router.put('/desmarcar/:idementa/:idutilizador', async function(req, res, next){

  let utilizador_id = req.params.idutilizador;
  let ementa_id = req.params.idementa;
  console.log("[artigosRoutes] Update favorite: " + utilizador_id + "|" + ementa_id);
  let result = await ementasModel.UpdateFavorito(ementa_id, utilizador_id);
  res.status(result.status).send(result.data);

});

/*REMARCAR UMA EMENTA COMO FAVORITO*/

router.put('/remarcar/:idementa/:idutilizador', async function(req, res, next){

  let utilizador_id = req.params.idutilizador;
  let ementa_id = req.params.idementa;
  console.log("[artigosRoutes] Update favorite: " + utilizador_id + "|" + ementa_id);
  let result = await ementasModel.UpdateFavoritoRemarcar(ementa_id, utilizador_id);
  res.status(result.status).send(result.data);

});

module.exports = router;



