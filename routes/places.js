var express = require('express');
var router = express.Router();
var placesModel = require('../models/placesModel');

router.get('/', async function(req, res, next) {
    console.log("[placesRoutes] Retrieving all places");
    let result = await placesModel.getPlaces();
    res.status(result.status).send(result.data);

});

module.exports = router;