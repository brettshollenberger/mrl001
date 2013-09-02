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


// Webshot config
// @note that on Herkou the standard temporary file is called 'tmp' so 
// we use that locally too :)
var join = require('path').join
  , tmpdir = '/tmp'
  , phantomPATH = null;
  
// in production / testing etc modes (basically anything on heroku) 
// we need to set a special path for phantomjs
if ('development' !== app.get('env')) {
    phantomPATH = join(__dirname, '/../../../', 'vendor/phantomjs/bin/phantomjs');
}
  
/**
* Our default webshot function, which has pre-set options
* 
* @param url {string} URL for phantomJS to take screenshot of
* @param file {string} Name of file where we save screenshot
* @param cb {function} Callback which will recieve error if any
*
*
*/  
var getWebshot = function(url, file, cb) {
    
    var options = {
        screenSize: {
            width: 320,
            height: 480
        },
        shotSize: {
            width: 320,
            height: 'all'
        },
        // timeout after 25 seconds
        timeout: 25000,
        script: function() {
          // todo: return page title in json response
          //console.log("Page Title: " + document.title);
    
          return {title: document.title};
        },
        streamType: 'pdf',
        paperSize: {format: 'letter', orientation: 'portrait'},
        userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
    };
    
    // on non-dev environments, ie: Heroku, set the phantomPath option
    if(phantomPATH !== null) {
        options.phantomPath = phantomPATH;
    }
    
    // call webshots
    webshot(url, file, options, cb);
    
};






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