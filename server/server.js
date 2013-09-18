/**
 * Module dependencies.
 */
var express = require('express'),
    fs = require('fs'),
    passport = require('passport'),
    logger = require('mean-logger');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

//Load configurations
//if test env, load example file
var env = process.env.NODE_ENV || 'development',
    config = require('./config/config')[env],
    auth = require('./config/middlewares/authorization'),
    //notifier = require('./app/notifier'),
    nodemailer = require('./app/notifier/examples/nodemailer/'),
    mongoose = require('mongoose');
    
var user = require('connect-roles');

//Bootstrap db connection
var db = mongoose.connect(config.db);


    

// accesss control!
// Load library
var Acl = require("virgen-acl").Acl
  , acl = new Acl();
 
var acl2 = require('acl');  
acl2 = new acl2(new acl2.memoryBackend());

//Bootstrap models
var models_path = __dirname + '/app/models';
fs.readdirSync(models_path).forEach(function(file) {
    require(models_path + '/' + file);
});

//bootstrap passport config
require('./config/passport')(passport, config);

var app = express();

//express settings
//require('./config/roles')(app, config, passport, user);

//express settings
require('./config/acl_roles')(app, config, passport, user, acl, acl2);

//express settings
require('./config/express')(app, config, passport, user);

//Bootstrap routes
require('./config/routes')(app, passport, auth, user, config, acl, acl2);

//Start the app by listening on <port>
var port = process.env.PORT || 3000;
config.port = port; // store for later because we cant get port fro req. object :(
var ip = '127.0.0.1';
//ip = '10.1.10.100';
app.listen(port, ip);
console.log('Express app started on port ' + port);

//Initializing logger 
logger.init(app, passport, mongoose);

//expose app
exports = module.exports = app;
