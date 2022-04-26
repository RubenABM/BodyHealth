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

app.get('/categoriasplace', function(req, res){

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

/*
app.post('/sendplano', function(req, res){
  var titulo = produto_titulo;
  var descricao = produto_desc;
  var preco = produto_preco;
  var points = produto_points;
  var categoria_id_produto = prod_categoria_id;

  db.query('SELECT * FROM users WHERE produto_titulo = "' + req.body.titulo + '" AND  = "' + req.body.password + '"')


});*/


async function addPlaceCategory(){
 
  let res = document.getElementById("result") //????

  let data = {

       local_category_name: document.getElementById("fusername").value, //o ID deve ser o ID do input

  }

  console.log("[addPlaceCategory data = " + JSON.stringify(data));  //CONFIRMAR O ENVIO DA INFORMAÇÃO

  //ENVIAR A INFORMAÇÃO (data) PARA A BD
  try{

    let newPlaceCategory = await $.ajax({ 

       url: "/add/newplacecategory",
       method: "post",
       data: JSON.stringify(data),
       contentType: "application/json",
       dataType: "json"

    });

    //ATUALIZAR MENSAGEM QUANDO O ENVIO DE DADOS É BEM SUCEDIDO
    res.innerHTML = "Inserida nova categoria: " + newPlaceCategory.local_category_id;


    //CASO OCORRA UM ERRO....
  } catch (err){

     console.log(err);

     if(err.responseJSON){
       res.innerHTML = err.responseJSON.msg;
     } else {
       res.innerHTML = "Não foi possivel adicionar uma nova categoria."
     }


  }


}

//GET DE UM ELEMENTO ESPECIFICO

window.onload = async function() {
  userId = sessionStorage.getItem("user_id"); //Buscar o parametro
  console.log("setItem->prodId = " + prodId);
  try {

      let user = await $.ajax({
          url: "/users/" + userId, //Inserir o parametro
          method: "get",
          dataType: "json"
      });
      console.log("[user] user = " + JSON.stringify(user));
      document.getElementById("name").innerHTML = user.user_name;
      document.getElementById("price").innerHTML = user.user_password;
      document.getElementById("type").innerHTML = user.user_morada;
      document.getElementById("id").innerHTML = user.user_points;
  } catch (err) {
      console.log(err);
      let mainElem = document.getElementById("main");
      if (err.status == 404)
          mainElem.innerHTML =
          "<h1>" + err.responseJSON.msg + "</h1>" + "<h2>Please select an existing product</h2>";
      else mainElem.innerHTML =
          "<h1>Server problems, please try later</h1>";
  }
}

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
    function(err, rows, fields) {
      if (err) {
        res.json({ msg: 'error' });
      } 
      else {
        res.json({  msg: 'success', user: rows });
      }
  });
});



app.listen(8080, function() {
    console.log('Node app is running on port 8080');
});
module.exports = app;