
/**
 * Module dependencies
 */

var express = require('express'),
  routes = require('./routes'),
  api = require('./routes/api'),
  http = require('http'),
  // notemplate = require('express-notemplate'),
  path = require('path');
var app = module.exports = express();


/**
 * Configuration
 */

// all environments
app.set('port', process.env.VCAP_APP_PORT || 3000);
app.set('views', __dirname + '/views');
// app.engine('html', notemplate.__express);
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
// app.use();

// development only
if (app.get('env') === 'development') {
  app.use(express.errorHandler());
}

// production only
if (app.get('env') === 'production') {
  // TODO
};


/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API
app.get('/api/name', api.name);
app.get('/api/upload', api.upload);
app.post('/api/upload', api.upload);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);


/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), "localhost")
  console.log('Express server listening on port ' + app.get('port'));
