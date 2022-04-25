var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./database');
var cors = require('cors');
 
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const corsOpts = { origin: '*', methods: ['GET', 'POST'], allowedHeaders: ['Content-Type']};
app.use(cors(corsOpts));

/*app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

app.get('/users', function(req, res) {
  db.query('SELECT * FROM utilizador', function(err, rows) {
    if (err) {
      res.json({ msg: 'error'});
    } else {
      res.json({ msg: 'success', users: rows });
    }
  });
});

<<<<<<< HEAD
app.get('/categoriasreceita', function(req, res){

  db.query('SELECT * FROM place_category', function(err, rows) {

    if(err){
      res.json({msg: 'error'});
    } else {
      res.json({msg: 'success', categories: rows})
    }

  });

});

/*API INGREDIENTES

const request = require('request');
var query = '1lb brisket and fries';
request.get({
  url: 'https://api.api-ninjas.com/v1/nutrition?query=' + query,
  headers: {
    'X-Api-Key': '/ysLobEUDw9zUj0FRHO0hQ==PMQ4WSXY0gGcamh3'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});

*/


app.post('/sendplano', function(req, res){
  var titulo = produto_titulo;
  var descricao = produto_desc;
  var preco = produto_preco;
  var points = produto_points;
  var categoria_id_produto = prod_categoria_id;

  db.query('SELECT * FROM users WHERE produto_titulo = "' + req.body.titulo + '" AND  = "' + req.body.password + '"')


});

app.post('/sendcategory', function(req, res) {
  var nomecat = local_category_name;
  db.query('SELECT * FROM place_category WHERE local_category_name = "' + req.body.nomecat + '"',
    function(err, rows, fields) {
      if (err) {
        res.json({ msg: 'error' });
      } 
      else {
        res.json({  msg: 'success', place_category: rows });
      }
  });
});


app.post('/user-details', function(req, res) {
  db.query('SELECT * FROM users WHERE email = "' + req.body.email + '" AND password = "' + req.body.password + '"',
=======
//Tentaiva de registo
app.post('/register', function(req, res) {
  db.query('insert into utilizador(user_name,user_password,user_morada,user_email,user_points,user_admin,user_pt,user_nutri)' +
  'values (' + req.body.name + ','+ req.body.password + ',' + req.body.email + ','  + req.body.morada + '0, "0", "0","0")',
    //'SELECT * FROM users WHERE email = "' + req.body.email + '" AND password = "' + req.body.password + '"',
>>>>>>> b0249ab26ec6432218999a10071c1e6d67cd2e0d
    function(err, rows, fields) {
      if (err) {
        res.json({ msg: 'error' });
      } 
      else {
        res.json({  msg: 'success', user: rows });
      }
  });
});

<<<<<<< HEAD
=======
//Tentativa de login
app.post('/login', function(req, res) {
  db.query('SELECT * FROM utilizador WHERE email = "' + req.body.username + '" AND password = "' + req.body.password + '"',
    function(err, rows, fields) {
      if (err) {
        res.json({ msg: 'error' });
        alert("BOA!");
      } 
      else {
        res.json({  msg: 'success', user: rows });
        alert("MAU!");
      }
  });
});
>>>>>>> b0249ab26ec6432218999a10071c1e6d67cd2e0d


app.listen(8080, function() {
    console.log('Node app is running on port 8080');
});
module.exports = app;