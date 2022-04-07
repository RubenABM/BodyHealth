var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let users=[{name:"John Doe", birthDate:"19/02/1999"}];
  res.send(users);
 });
 

module.exports = router;
/*
//Pode estar ou não correto:
const db = require("./models/connection")
router.get('/teste', function(req, res, next) {
      db.any("SELECT * FROM utilizador")
      .then(rows => {
        console.log(rows);
        res.json(rows)
      })
      .catch(error => {
        console.log(error)
      })
 });*/