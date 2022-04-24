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

//Tentaiva de registo
app.post('/register', function(req, res) {
  db.query('insert into utilizador(user_name,user_password,user_morada,user_email,user_points,user_admin,user_pt,user_nutri)' +
  'values (' + req.body.name + ','+ req.body.password + ',' + req.body.email + ','  + req.body.morada + '0, "0", "0","0")',
    //'SELECT * FROM users WHERE email = "' + req.body.email + '" AND password = "' + req.body.password + '"',
    function(err, rows, fields) {
      if (err) {
        res.json({ msg: 'error' });
      } 
      else {
        res.json({  msg: 'success', user: rows });
      }
  });
});

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


app.listen(8080, function() {
    console.log('Node app is running on port 8080');
});
module.exports = app;