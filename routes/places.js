var express = require('express');
var router = express.Router();
var placesModel = require('../models/placesModel');

router.get('/', async function(req, res, next) {
    console.log("[placesRoutes] Retrieving all places");
    let result = await placesModel.getPlaces();
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

module.exports = router;