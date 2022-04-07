var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/estaticos', function(req, res, next) {
  let users=[{name:"John Doe", birthDate:"19/02/1999"}];
  res.send(users);
 });
 

module.exports = router;

//Pode estar ou não correto:
const pool = require("./models/connection")
router.get('/teste', function(req, res, next) {
      pool.any("SELECT * FROM utilizador")
      res.send(users);
 });