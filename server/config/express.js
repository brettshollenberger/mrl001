
/**
 * Module dependencies.
 */
var express = require('express'),
    mongoStore = require('connect-mongo')(express),
    flash = require('connect-flash'),
    path = require('path'),
    helpers = require('view-helpers'),
    env = process.env.NODE_ENV || 'development',
    fs = require('fs');
    
module.exports = function(app, config, passport, standardReponse) {
    app.set('showStackError', true);

    //Should be placed before express.static
    app.use(express.compress({
        filter: function(req, res) {
            return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
        },
        level: 9
    }));

    // Basic CORS middleware example
    var allowCrossDomain = function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        //res.header("Access-Control-Allow-Headers", "X-Requested-With");

        next();
    };
    
    var cacheBuster = function(req, res, next){
    
        res.header("Cache-Control", "no-cache, no-store, must-revalidate");
        res.header("Pragma", "no-cache");
        res.header("Expires", 0);
        next();
    };
    
    // @todo isolate to api routes...
    app.use(cacheBuster);

    // @todo this might break local network testing on IE... 
    // app.use(allowCrossDomain);

    app.use(standardReponse.middleware());

    //Setting the fav icon and static folder
    app.use(express.favicon());
    app.use(express.static(config.root + '/public'));

    // PORT from genesis
    //app.use(express.static(config.root + '/build'));
    //app.use("/downloads", express.static(config.root + '/tmp'));
    app.use(express.static(path.join(__dirname, '../../build')));
    app.use("/downloads", express.static(path.join(__dirname, '../../tmp')));

    // end port

    //Don't use logger for test env
    if (process.env.NODE_ENV !== 'test') {
        app.use(express.logger('dev'));
    }

    //Set views path, template engine and default layout
    app.set('views', config.root + '/app/views');
    app.set('view engine', 'jade');
    //app.set('views', __dirname + '/views');

    //Enable jsonp
    app.enable("jsonp callback");

    app.configure(function() {
        //cookieParser should be above session
        app.use(express.cookieParser());

        //bodyParser should be above methodOverride
        app.use(express.bodyParser());
        app.use(express.methodOverride());

        //express/mongo session storage
        app.use(express.session({
            secret: 'MEAN',
            store: new mongoStore({
                url: config.db,
                collection: 'sessions'
            })
        }));

        //connect flash for flash messages
        // @todo remove and test, remove instance where flash messages are set..
        app.use(flash());

        //dynamic helpers
        app.use(helpers(config.app.name));

        //use passport session
        app.use(passport.initialize());
        app.use(passport.session());
        

        /**
        * -------------------------
        *  
        * nice fix for angular and csrf protection
        * @see http://mircozeiss.com/using-csrf-with-express-and-angular/
        * 
        * @note in a nutshell, csrf works by generating a hashed key per user per session. This key
        *       is returned and stored in a cookie in the browser. This key is then sent automatically
        *       with each subsequent request.
        *
        * @note we have modified this to work with specific routes. 
        *       this allows us to rpotect our local api with csrf, while exposing our public api
        *
        * @note this also adds a basic security layer to our internal API
        *       since a user would need to first visit the regular site, then copy a valid x-xsrf-token 
        *       and session id, and then set from a REST client or curl request. 
        *       Not impossible, just an extra layer.
        *
        * @note this must come after the passport.initalize() and passport.session. Not sure why
        *       but throws errors otherwise.  
        * 
        */ 
        var csrfMiddleware = express.csrf();
        
        // define our middleware
        function csrfHandler(req, res, next) { 
            csrfMiddleware(req, res, next);
        }
        
        function csrfCookieSetter(req, res, next) { 
            res.cookie('XSRF-TOKEN', req.csrfToken()); 
            next();
        }
        
        // attach csrf protection to all of our api endpoints
        //if(process.env.NODE_ENV !== 'development') {
        app.all('/api*', csrfHandler, csrfCookieSetter, function(req, res, next) {
            next();
        });
   

        // routes should be at the last
        app.use(app.router);

        // welcome message for API
        app.all('/api', function(req, res, next) {
            res.ok('Hello world!');
        });
        
        app.all('/api/ping', function(req, res, next) {
            res.ok('PONG');
        });

        // get changelog
        // @todo make seperate mean resource? Or, all projects should have this so leave in place? 
        app.get('/api/changelog', function(req, res) {
            var clog = path.join(config.root, '../changelog.md');
            res.send(fs.readFileSync(clog));
        });

        // Standardize error responses
        app.use(standardReponse.errorResponse());

        /**
         * catch all for api endpoints
         * that are not offical. They get a not found response
         *
         * @note that by putting app.all() inside app.use() we ensure its run after
         *       the regular routing. if we just called app.all() it would override all the other routes.
         *
         */
        app.use(function(req, res, next) {
            app.all('/api*', function(req, res, next) {
                return res.failure('Resource not found', 404);
            });
            next(); // needed or the calls below will never happen
        });

        // send all non-api requests to our main index.html page, which starts our app
        // this is a nice way to support non hash links on single page apps... and why we started using
        // angular and genesis in the first place <3
        app.use(function(req, res, next) {
            app.get('*', function(req, res, next) {
                res.redirect('/#' + req.url);
            });
        });

    });
};
