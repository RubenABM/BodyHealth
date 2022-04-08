var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/estaticos', function(req, res, next) {
  let users=[{name:"John Doe", birthDate:"19/02/1999"}];
  res.send(users);
 });
 

module.exports = router;


router.get('/teste', function(req, res, next) {
  pool.query('SELECT * FROM utilizador', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
});