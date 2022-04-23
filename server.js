/*const express = require('express');
const app = express();
const port = 3000;
//const pool = require('./models/connection.js')

app.get("/", (req, res) => {

    res.send("Hello World")

});

//pool.connect();

app.listen(port, () => console.log('App is online in ${port}'));

*/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./models/connection');
var cors = require('cors');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const corsOpts = { origin: '*', methods: ['GET', 'POST'], allowedHeaders: ['Content-Type']};
app.use(cors(corsOpts));

app.get('/users', function(req, res) {
  db.query('SELECT * FROM utilizador', function(err, rows) {
    if (err) {
      res.json({ msg: 'error'});
    } else {
      res.json({ msg: 'success', users: rows });
    }
  });
});

app.post('/user-details', function(req, res) {
  db.query('SELECT * FROM users WHERE email = "' + req.body.email + '" AND password = "' + req.body.password + '"',
    function(err, rows, fields) {
      if (err) {
        res.json({ msg: 'error' });
      } 
      else {
        res.json({  msg: 'success', user: rows });
      }
  });
});

app.listen(3000, function() {
    console.log('Node app is running on port 8080');
});
module.exports = app;