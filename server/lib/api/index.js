var express   = require('express');
var app       = module.exports = express();

var fs        = require('fs');
var passport  = require('passport');
var path      = require('path');
var resource  = require('./routes/resource');
var webshot   = require('webshot');



app.get('/api/bower', function(req, res) {
  res.send(fs.readFileSync(__dirname + '/../../../bower.json'));
});

app.get('/api/package', function(req, res) {
  res.send(fs.readFileSync(__dirname + '/../../../package.json'));
});

app.get('/api/changelog', function(req, res) {
  res.send(fs.readFileSync(__dirname + '/../../../changelog.md'));
});

var join = require('path').join
  , tmpdir = '/tmp'
  ;

var getWebshot = function(url, file, cb) {
  var options = {
    screenSize: {
      width: 320,
      height: 280
    },
    shotSize: {
      width: 'window',
      height: 480
    },
    // timeout after 25 seconds
    timeout: 25000,
    script: function() {
      // todo: return page title in json response
      //console.log("Page Title: " + document.title);

      return {title: document.title};
    },
    userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)  AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
  };
  webshot(url, file, options, cb);
};

app.get('/webshot/:url(*)', function(req, res){
  var url = 'http://google.com'
    , id = 12321312312312
    , file = join(tmpdir, id + '.pdf');
   
  console.log('WEBSHOT : FILE is ' + file); 
    
  getWebshot(url, file, function(err){
    console.log('WEBSHOT : Complete'); 
    if (err) {
        console.log('WEBSHOT : ERROR');
        return console.log(err);
    }
    console.log('WEBSHOT : OK');
    res.sendfile(file);
    // res.json({
    //   status: 'OK',
    //   url: url
    // });
  });
});


resource.setup(app);

/*
app.get('/api/me/auth', 
  passport.authenticate('basic', { session: false }),
    function(req, res) {
        res.json(req.user);    
});
*/

// Passport example
/*
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

app.post('/api/wines', function(req, res) { 
    passport.authenticate('local', function(req, res) {
        wine.addWine(req, res); 
    });
});
*/
