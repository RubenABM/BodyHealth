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

router.get('/:id(\\d+)', async function(req, res, next){

    let id = req.params.id; 
    console.log("[usersRoutes] Retrieving user with id " + id);
    let result = await usersModel.getUser(id);
    res.status(result.status).send(result.data);
  
  });


/* POST a new user */
router.post('/insertnewuser', async function(req, res, next) {
    let newUser = req.body;
    console.log("[usersRoutes] Saving user " + JSON.stringify(newUser));
    let result = await usersModel.saveUser(newUser);
    res.sendStatus(result.status).send(result.data);
});



module.exports = router;