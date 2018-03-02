var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('req-flash');

//routes
var index = require('./routes/index');
var users = require('./routes/users');
var home = require('./routes/home');
var about = require('./routes/about');
var blog = require('./routes/blog');
var login = require('./routes/login');

var app = express();

//login stuff
//~~~~~~~~~~~~~~~~~~~~~~~~~~
// var express = require('express');

// var port = 8999;
// var port = 3000;

// var app = express.createServer();


//checkauth
// app.use(function (req, res, next) {
// 	console.log('checkAuth ' + req.url);

// 	// don't serve /secure to those not logged in
// 	// you should add to this list, for each and every secure url
// 	if (req.url === '/secure' && (!req.session || !req.session.authenticated)) {
// 		res.render('unauthorized', { status: 403 });
// 		return;
// 	}
// });






	// next();// do i need this




// // app.use(express.cookieParser());


app.use(session({ secret: 'example' }));
// // app.use(express.bodyParser());
app.use(bodyParser.urlencoded({
  extended: true
}));

// app.use(bodyParser.json());
app.use(flash());
// // app.use(checkAuth);
// // app.use(app.router);//do i need this
// // app.set('view engine', 'jade');
// app.set('view options', { layout: false });



// require('./lib/routes.js')(app);

// app.listen(port);
// console.log('Node listening on port %s', port);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//login stuff above 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//use a static middleware..
app.use('/', index);
app.use('/users', users);
app.use('/home', home);
app.use('/about', about);
app.use('/blog', blog);
app.use('/login', login);

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

module.exports = app;


