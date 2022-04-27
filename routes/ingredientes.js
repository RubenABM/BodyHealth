var express = require('express');
var router = express.Router();
var ingredientesModel = require('../models/ingredientesModel');

router.get('/', async function(req, res, next) {
    console.log("[ingredientesRoutes] Retrieving all ingredients");
    let result = await ingredientesModel.getIngredientes();
    res.status(result.status).send(result.data);

});

module.exports = router;