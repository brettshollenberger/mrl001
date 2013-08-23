console.log('SERVER : INIT : Seeder');

var environment = 'production';

// our master resources object
var resources = {};

resources.vendor        = require('./seed_data/vendor').seed();
resources.program       = require('./seed_data/program').seed();
resources.application   = require('./seed_data/application').seed();
resources.quote         = require('./seed_data/quote').seed();
resources.user          = require('./seed_data/user').seed();

var insertResource = function(resource) {
    
    // get the collection
    db.collection(resource, function(err, collection) {
        // drop the collection
        collection.drop(function(err, reply) {
           console.log('SEED : STATUS : Drop ' + resource + ' Collection');
        });
        // insert the collection
        collection.insert(resources[resource], {w:1}, function(err, result) {
           console.log('SEED : STATUS : Create ' + resource + ' Collection');
           console.log('SEED : STATUS : finished seeding ' + resource);
           console.log('------------------------------------------------------------');
           //process.exit(0);
        }); 
    });
};

var mongo = require('mongodb');
 
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

/**
* CONNECT to db, depending on environment
*
*/
if('development' === environment) {
 
    console.log('=============');
    console.log('CONNECTING TO DEVELOPMENT DB'); 
    console.log('=============');
    
    var server = new Server('localhost', 27017, {auto_reconnect: true});
    db = new Db('marlindb', server);
 
    db.open(function(err, db) {
        if(!err) {
            console.log("Connected to 'marlindb' database");
            populateDB();
        } else {
            console.log(err);
        }
    });  
       
} else {
    
    console.log('=============');
    console.log('WARNING: CONNECTING TO LIVE DB, be careful!'); 
    console.log('=============');
    
    var server = new Server('ds037768.mongolab.com', 37768, {auto_reconnect: true});
    db = new Db('marlin_dev', server);
   
    db.open(function(err, client) {
        client.authenticate('facultymatt', 'scrapple1', function(err, success) {
            if(!err) {
                console.log("Connected to 'marlindb' database");
                
                console.log('=============');
                console.log('WARNING: YOU ARE SEEDING THE LIVE DB'); 
                console.log('=============');
                
                populateDB();
                
            } else {
                console.log(err);
            }
        });
    });
}


var populateDB = function() {

    console.log(resources);
    console.log('SEED : STATUS : beginning the seed process... cross your fingers!');
    
    // iterate over all of the resources to add to database
    for (var resource in resources) {
        console.log('SEED : STATUS : starting with ' + resource);
        insertResource(resource);
    }
    process.exit(0);
};