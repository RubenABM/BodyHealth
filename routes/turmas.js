var express = require('express');
var router = express.Router();
var turmasModel = require('../models/turmasModel');

/* POST a new class */
router.post('/insertnewturma', async function(req, res, next) {
    let newTurma = req.body;
    console.log("[turmasRoutes] Saving class " + JSON.stringify(newTurma));
    let result = await turmasModel.saveTurma(newTurma);
    res.sendStatus(result.status).send(result.data);
  });
  

  module.exports = router;

