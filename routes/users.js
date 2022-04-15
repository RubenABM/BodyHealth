var express = require('express');
var router = express.Router();
const pool = require('./models/connection.js')

/* GET users listing. */
router.get('/estaticos', function(req, res, next) {
  let users=[{name:"John Doe", birthDate:"19/02/1999"}];
  res.send(users);
});

pool.connect();

router.get('/testee', function(req, res, next) {
  pool.query('SELECT * FROM utilizador', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
    pool.end();
  })
});

module.exports = router;