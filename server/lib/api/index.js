var express   = require('express');
var app       = module.exports = express();
var fs        = require('fs');
var path      = require('path');
var wine     = require('./routes/wines');
var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;

passport.use(new BasicStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.validPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));


app.get('/api/bower', function(req, res) {
  res.send(fs.readFileSync(__dirname + '/../../../bower.json'));
});

app.get('/api/package', function(req, res) {
  res.send(fs.readFileSync(__dirname + '/../../../package.json'));
});

app.get('/api/changelog', function(req, res) {
  res.send(fs.readFileSync(__dirname + '/../../../changelog.md'));
});






app.get('/api/me', 
  passport.authenticate('basic', { session: false }),
    function(req, res) {
        res.json(req.user);
        
});


app.get('/api/wines',
    passport.authenticate('local', 
        function(req, res) {
            console.log('success!');
            res.send('matt');
        }
));
app.get('/api/wines/:id', wine.findById);
app.post('/api/wines', function(req, res) { 
    passport.authenticate('local', function(req, res) {
        wine.addWine(req, res); 
    });
});
app.put('/api/wines/:id', wine.updateWine);
app.delete('/api/wines/:id', wine.deleteWine);
