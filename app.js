var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const port = process.env.PORT || 8080;

var usersRouter = require('./routes/users');
var placesRouter = require('./routes/places');
var recipesRouter = require('./routes/recipes');
var ementasRouter = require('./routes/ementas');
var ingredientesRouter = require('./routes/ingredientes');
var turmasRouter = require('./routes/turmas');
var produtoRouter = require('./routes/produto');
var eventosRouter = require('./routes/eventos');
var indexRouter = require('./routes/index');
var pedidosRouter = require('./routes/pedidos');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/places', placesRouter);
app.use('/recipes', recipesRouter);
app.use('/ementas', ementasRouter);
app.use('/turmas', turmasRouter);
app.use('/ingredientes', ingredientesRouter);
app.use('/produtos', produtoRouter);
app.use('/eventos', eventosRouter);
app.use('/pedidos', pedidosRouter);

app.use('/', indexRouter);

app.listen(port, () => {
    console.log("App is running on port " + port);
  });

module.exports = app;