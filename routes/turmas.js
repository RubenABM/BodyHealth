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
  
//OBTER AS TURMAS ONDE O UTILIZADOR SE ENCONTRA INSERIDO / POSSUI

router.get('/turmasuser/:idutilizador', async function(req, res, next){

    let id_utilizador = req.params.idutilizador;
    console.log("[turmasRoutes] Retrieving classes from user " + id_utilizador);
    let result = await turmasModel.getTurmasUser(id_utilizador);
    res.status(result.status).send(result.data);
  
  });


// VISUALIZAR RECEITAS E EMENTAS NUMA TURMA

   //CÓDIGO//

//VISUALIZAR PARTICIPANTES DE UMA TURMA

   //CÓDIGO//

   router.get('/turmasuser/participantes/:idturma', async function(req, res, next){

      let id_turma = req.params.idturma;
      console.log("[turmasRoutes] Retrieving participantes from class with id: " + id_turma);
      let result = await turmasModel.getPaticipantTurma(id_turma);
      res.status(result.status).send(result.data);
    
    });

//APAGAR UMA TURMA

   //CÓDIGO//

//REMOVER PARTICIPANTE DE UMA TURMA

   //CÓDIGO//

//ADICIONAR PARTICIPANTE A UMA TURMA

   //CÓDIGO//

  module.exports = router;

