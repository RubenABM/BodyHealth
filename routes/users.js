/*var express = require('express');
var router = express.Router();
const pool = require('../models/connection.js')

 router.get('/estaticos', function(req, res, next) {
  let users=[{name:"John Doe", birthDate:"19/02/1999"}];
  res.send(users);
});

pool.connect();


router.get('/teste', function(req, res, next) {
  pool.query('SELECT * FROM utilizador', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
    //pool.end();
  })
});

module.exports = router;*/



