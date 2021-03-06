var express = require('express');
var router = express.Router();
var placesModel = require('../models/placesModel');

router.get('/', async function(req, res, next) {
    console.log("[placesRoutes] Retrieving all places");
    let result = await placesModel.getPlaces();
    res.status(result.status).send(result.data);

});

router.get('/getplace/:morada', async function(req, res, next) {
  let moradaa = req.params.morada;
  console.log("[placesRoutes] Retrieving all places");
  let result = await placesModel.getOnlyOnePlace(moradaa);
  res.status(result.status).send(result.data);

});

router.get('/:id(\\d+)', async function(req, res, next){

  let id = req.params.id;
  console.log("[placesRoutes] Retrieving place with id " + id);
  let result = await placesModel.getPlace(id);
  res.status(result.status).send(result.data);

});

router.post('/addplace', async function(req, res, next){

  let newPlace = req.body;
  console.log("[placesRoutes] Saving place " + JSON.stringify(newPlace));
  let result = await placesModel.savePlace(newPlace);
  res.status(result.status).send(result.data);
 
});



/* GET LOCAIS PELO NOME (EXTERNAL API)

router.get('/:text(\\d+)', async function(req, res, next) {

  let text = req.params.text;
  console.log("[placesRoutes] Retrieving point of place with name " + text);
  let result = await placesModel.getPlacePoint(text);
  res.status(result.status).send(result.data);

});*/

/*CLIQUES NO BOTÃO*/

router.get('/categoryplace/:id', async function(req, res, next){

  let cat_id = req.params.id;
  console.log("[placesRoutes] Retrieving point of places with category " + cat_id);
  let result = await placesModel.getPlacesCategory(cat_id);
  res.status(result.status).send(result.data);

});

router.get('/filtrar/cafes/1', async function(req, res, next){

  let result = await placesModel.getPlacesCafes();
    res.status(result.status).send(result.data);

});

router.get('/filtrar/bares/2', async function(req, res, next){

  let result = await placesModel.getPlacesBares();
    res.status(result.status).send(result.data);

});

router.get('/filtrar/restaurantes/3', async function(req, res, next){

  let result = await placesModel.getPlacesRestaurantes();
    res.status(result.status).send(result.data);

});


router.get('/filtrar/ginasios/4', async function(req, res, next){

  let result = await placesModel.getPlacesGinasios();
    res.status(result.status).send(result.data);

});


module.exports = router;