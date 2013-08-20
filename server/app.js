/**
 * Module dependencies.
 */

var express   = require('express');
var app       = module.exports = express();

var path      = require('path');
var api       = require('./lib/api');


app.set('base', 'http://marlinquoter.herokuapp.com/'); // base with trailing slash

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');

app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('change this value to something unique'));
app.use(express.cookieSession());
app.use(express.compress());
app.use(api);
app.use(express.static(path.join(__dirname, '../build')));
app.use(express.static(path.join(__dirname, '../temp')));
app.use(app.router);

if ('development' === app.get('env')) {
    app.use(express.errorHandler());
}

app.get('*', function(req, res) {
  res.redirect('/#' + req.url);
});


