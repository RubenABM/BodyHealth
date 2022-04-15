var pg = require('pg');

//pode estar mal!
const connectionString = "postgres://zrznopdgddhzpb:c25ef89e544d07ff6382509ce1ec20a4535bffede8a2d96367c35ec1910e88b2@ec2-52-212-228-71.eu-west-1.compute.amazonaws.com:5432/d8sb04nd3dc7fk"
//"postgres://root:password@localhost:5432/students"
const Pool = pg.Pool
const pool = new Pool({
 connectionString,
 max: 10,
 ssl: {
 require: true,
 rejectUnauthorized: false
 }
})

pool.connect()
pool.query('SELECT * FROM utilizador', (err,res)=>{
    console.log(err,res)
    pool.end()
})

var express = require('express');
var router = express.Router();

router.get('/teste', function(req, res, next) {
    pool.query('SELECT * FROM utilizador', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
      pool.end();
    })
  });
  
module.exports = router;

