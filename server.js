const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const commaargs = require ('command-line-args');
const baseRouter = require ('@e-xisto/base-router');
let args;

const options = [ { name: 'map', alias: 'm', type: String, defaultValue: 'map.json'} ];

try {
    args = new require ('command-line-args')(options);
} catch (e) {
    console.log (e);
    process.exit ();
}


const app = module.exports = express ();

// view engine setup
app.set('view engine', 'njk');
app.set('views', path.join(__dirname, 'views'));

nunjucks.configure('views', {
  autoescape: true,
  noCache: true,
  express   : app
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

baseRouter.configure ({ path: __dirname, map: args.map });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
