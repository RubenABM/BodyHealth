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

app.get('/users', function(req, results) {
  db.query('SELECT * FROM students', function(err, rows) {
    if (err) {
      results.json({ msg: 'error'});
    } else {
      results.json({ msg: 'success', users: rows });
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