console.log('SERVER : INIT : Seeder');

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

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('marlindb', server);

db.open(function(err, db) {
    if(!err) {
        console.log('------------------------------------------------------------');
        console.log("Connected to 'marlindb' database");
        console.log("Seeding the Database");
        console.log('------------------------------------------------------------');
        populateDB();
    } else {
        console.log(err);
    }
});

var populateDB = function() {
    console.log(resources);
    
    console.log('SEED : STATUS : beginning the seed process... cross your fingers!');
    // iterate over all of the resources to add to database
    for (var resource in resources) {
        console.log('SEED : STATUS : starting with ' + resource);
        insertResource(resource);
    }    
};


