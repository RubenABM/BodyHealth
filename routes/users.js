var express = require('express');
var router = express.Router();
var usersModel = require('../models/usersModel');

/* GET users listing. 
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});*/

router.get('/hello', function(req, res, next) {
    res.send('hello');
});

router.get('/', async function(req, res, next) {
    console.log("[usersRoutes] Retrieving all users");
    let result = await usersModel.getUsers();
    res.status(result.status).send(result.data);

});

//OBTER RANKING DE PONTOS

router.get('/ranking', async function(req, res, next){

    console.log("Ranking users....");
    let result = await usersModel.getRanking();
    res.status(result.status).send(result.data);

});



router.get('/:id(\\d+)', async function(req, res, next){

    let id = req.params.id; 
    console.log("[usersRoutes] Retrieving user with id " + id);
    let result = await usersModel.getUser(id);
    res.status(result.status).send(result.data);
  
  });

  router.get('dadosfisicos/:idutilizador', async function(req, res, next){

    let id = req.params.id; 
    console.log("[usersRoutes] Retrieving user with id " + id);
    let result = await usersModel.getUserDados(id);
    res.status(result.status).send(result.data);
  
  });


/* POST a new user */
router.post('/insertnewuser', async function(req, res, next) {
    let newUser = req.body;
    //console.log("[usersRoutes] Saving user " + JSON.stringify(newUser));
    let result = await usersModel.saveUser(newUser);
    res.status(result.status).send(result.result);
});

//POST DO LOGIN -- PEDIR AJUDA AO WESLEY E PROFESSOR


router.delete('/deleteuser/:idutilizador', async function(req,res, next){

    let id = req.params.idutilizador; 
    console.log("[usersRoutes] Retrieving user with id " + id);
    let result = await usersModel.DeleteUser(id);
    res.status(result.status).send(result.data);

});

router.post('/loginuser', async function(req, res, next){

    let username = req.body;
    

    let result = await usersModel.authUser(username);
    res.status(result.status).send(result.result);


});
module.exports = router;