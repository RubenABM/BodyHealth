/*var express = require('express');
var router = express.Router();

 GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

*/

const express = require("express");
const app = express();
const pool = require("./db.js");

app.listen(3000, () => {

 console.log("server is listening on port 3000");

});

app.get("/todos", async(req, res) => {

   try{
      const allTodos = await pool.query("SELECT * FROM utilizador");

      res.json(allTodos.rows);
   } catch(err){
     console.error(err.message);
   }


})
