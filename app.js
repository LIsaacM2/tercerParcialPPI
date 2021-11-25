var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const dbUrl = "mongodb://localhost:27017/appDatabase"
const dbOptions = {
  useNewUrlParser : true
};

mongoose.connect(dbUrl, dbOptions);
mongoose.connection.on("open", function(){
  console.log("MongoDB connection openned");
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var servicesRouter = require('./routes/services');
var authRouter = require('./routes/auth.routes');
var citasRouter = require('./routes/citas');

var app = express();

app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/services', servicesRouter);
app.use('/citas', citasRouter);
app.use('/login', authRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
  console.log(err);
});

module.exports = app;
