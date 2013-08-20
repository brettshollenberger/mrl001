var express   = require('express');
var app       = module.exports = express();

var fs        = require('fs');
var passport  = require('passport');
var path      = require('path');
var resource  = require('./routes/resource');
var webshot = require('webshot');



app.get('/api/bower', function(req, res) {
  res.send(fs.readFileSync(__dirname + '/../../../bower.json'));
});

app.get('/api/package', function(req, res) {
  res.send(fs.readFileSync(__dirname + '/../../../package.json'));
});

app.get('/api/changelog', function(req, res) {
  res.send(fs.readFileSync(__dirname + '/../../../changelog.md'));
});



app.get('/pdftest', function(req, res) {
    console.log('starting pdftest');
    
    var fileName = __dirname + '/../../../temp/testssss.pdf';
    
    var options = {
        screenSize: {
            width: 320,
            height: 480
        },
        shotSize: {
            width: 320,
            height: 'all'
        },
        streamType: 'pdf',
        paperSize: {format: 'letter', orientation: 'portrait'},
        userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)' + ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
    };
    
    webshot('google.com', fileName, options, function(err, renderStream) {
      
      /*
console.log('starting pdftest - webshot done');
      
      
*/
      
      /*
var file = fs.createWriteStream('test.png', {encoding: 'binary'});

      renderStream.on('data', function(data) {
        file.write(data.toString('binary'), 'binary');
      });
*/

        renderStream.pipe(res);
      
    });
    
});

app.get('/api/v1/quote/:id/pdf3', function(req, res) {
    
    console.log('generating pdf for quote id: ' + req.params.id);
    
    var url = app.get('base') + '#/tools/quoter/' + req.params.id + '/print';
    var fileName = __dirname + '/../../../temp/' + req.params.id + '.pdf';
    fileName = path.resolve(fileName);
    
    console.log('fileName is ' + fileName);
    
    var options = {
        screenSize: {
            width: 320,
            height: 480
        },
        shotSize: {
            width: 320,
            height: 'all'
        },
        streamType: 'pdf',
        paperSize: {format: 'letter', orientation: 'portrait'},
        userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)' + ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
    };
    webshot(url, fileName, options, function(err) {
        console.log('OK');
                
        console.log('path is ' + fileName); 
        
        //res.send(fs.readFileSync(__dirname + '/../../../temp/' + req.params.id + '.pdf'));
        
        res.download(fileName);
    });
});

app.get('/api/v1/quote/:id/pdf2', function(req, res) {
    
    console.log('generating pdf for quote id: ' + req.params.id);
    
    var url = app.get('base') + '#/tools/quoter/' + req.params.id + '/print';
    var fileName =  './app/temp/' + req.params.id + '.pdf';
    //fileName = path.resolve(fileName);
    
    console.log('fileName is ' + fileName);
    
    var options = {
        screenSize: {
            width: 320,
            height: 480
        },
        shotSize: {
            width: 320,
            height: 'all'
        },
        streamType: 'pdf',
        paperSize: {format: 'letter', orientation: 'portrait'},
        userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)' + ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
    };
    webshot(url, fileName, options, function(err) {
        console.log('OK');
                
        console.log('path is ' + fileName); 
        
        //res.send(fs.readFileSync(__dirname + '/../../../temp/' + req.params.id + '.pdf'));
        
        res.download(fileName);
    });
});

app.get('/api/v1/quote/:id/pdf1', function(req, res) {
    
    console.log('generating pdf for quote id: ' + req.params.id);
    
    var url = app.get('base') + '#/tools/quoter/' + req.params.id + '/print';
    var fileName = __dirname + '/../../../build/temp/' + req.params.id + '.pdf';
    fileName = path.resolve(fileName);
    
    console.log('fileName is ' + fileName);
    
    var options = {
        screenSize: {
            width: 320,
            height: 480
        },
        shotSize: {
            width: 320,
            height: 'all'
        },
        streamType: 'pdf',
        paperSize: {format: 'letter', orientation: 'portrait'},
        userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)' + ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
    };
    webshot(url, fileName, options, function(err) {
        console.log('OK');
                
        console.log('path is ' + fileName); 
        
        //res.send(fs.readFileSync(__dirname + '/../../../temp/' + req.params.id + '.pdf'));
        
        res.download(fileName);
    });
});

/*
app.get('/api/v1/quote/:id/download', function(req, res) {
    
    console.log('generating pdf for quote id: ' + req.params.id);
    
    var url = app.get('base') + '#/tools/quoter/' + req.params.id + '/print';
    var fileName = './temp/' + req.params.id + '.pdf';
    
    console.log('fileName is ' + fileName);
    
    var options = {
        screenSize: {
            width: 320,
            height: 480
        },
        shotSize: {
            width: 320,
            height: 'all'
        },
        streamType: 'pdf',
        paperSize: {format: 'letter', orientation: 'portrait'},
        userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)' + ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
    };
    webshot(url, fileName, options, function(err) {
        console.log('OK');
        
        var pathToDownload = path.resolve(__dirname + '/../../../' + fileName);
        
        console.log('path is ' + pathToDownload); 
        
        res.download(pathToDownload);
    });
});
*/

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
