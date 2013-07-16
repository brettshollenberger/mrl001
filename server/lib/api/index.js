var express   = require('express');
var app       = module.exports = express();
var fs        = require('fs');
var path      = require('path');
var wines     = require('./routes/wines');

app.get('/api/bower', function(req, res) {
  res.send(fs.readFileSync(__dirname + '/../../../bower.json'));
});

app.get('/api/package', function(req, res) {
  res.send(fs.readFileSync(__dirname + '/../../../package.json'));
});

app.get('/api/changelog', function(req, res) {
  res.send(fs.readFileSync(__dirname + '/../../../changelog.md'));
});

app.get('/api/wines', wines.findAll);
app.get('/api/wines/:id', wines.findById);
