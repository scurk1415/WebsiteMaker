var express = require('express');
var path = require('path');

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var appRoutes = require('./routes/app');
var authRoutes = require('./routes/auth');
var solutionRoutes = require('./routes/solution');
var uploadRoutes = require('./routes/upload');

var app = express();
mongoose.Promise = global.Promise;
//dev enviroment
//mongoose.connect('localhost:27017/diploma');
//mongolab
mongoose.connect('admin_ales:diplomska@ds119568.mlab.com:19568/diplomska');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/upload', uploadRoutes);
app.use('/solution', solutionRoutes);
app.use('/authenticate', authRoutes);
app.use('/', appRoutes);

app.listen(10050, function(){
    console.log('ng2-uploader server running on port 10050.');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('index');
});
module.exports = app;
