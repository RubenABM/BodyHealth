var express = require('express');
var router = express.Router();
var ingredientesModel = require('../models/ingredientesModel');

router.get('/', async function(req, res, next) {
    console.log("[ingredientesRoutes] Retrieving all ingredients");
    let result = await ingredientesModel.getIngredientes();
    res.status(result.status).send(result.data);

});

router.get('/ingredientdetails/:id', async function(req, res, next){

    let id_ing = req.params.id;
    console.log("[ingredientesRoutes] Retrieving selected ingredient with id: " + id_ing);
    let result = await ingredientesModel.getIngredient(id_ing);
    res.status(result.status).send(result.data);

});

router.post('/insertnewingrediente', async function(req, res, next) {
    let newIngrediente = req.body;
    console.log("[recipesRoutes] Saving ingredient " + JSON.stringify(newIngrediente));
    let result = await ingredientesModel.saveIngrediente(newIngrediente);
    res.sendStatus(result.status).send(result.data);
  });

 


module.exports = router;