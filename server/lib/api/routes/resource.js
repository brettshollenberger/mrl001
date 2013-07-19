/**
* Generic resource catch-all
*
* This resource has the basic CRUD functions, and is setup to catch any route
* We can make more specific functions, for example user/login or vendor/1/programs
* by making a seperate file, requiring them, and calling their setup functions
*
*/
var mongo = require('mongodb');
var vendor = require('./vendor');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('marlindb', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'marlindb' database");
    } else {
        console.log(err);
    }
});

/**
* Default error message 
*/
exports.error = function() {
  
  console.log('ERROR!');
  
  return function(req, res, next) {
      res.send('Resource not found', 404);
  }; 
};

/**
* Create an entity
*/
exports.create = function() {

    return function(req, res, next) {
        var item = req.body;
        console.log('Adding item: ' + JSON.stringify(item));
        db.collection(req.params.resource, function(err, collection) {
            collection.insert(item, {safe:true}, function(err, result) {
                if (err) {
                    res.send({'error':'An error has occurred'});
                } else {
                    console.log('Success: ' + JSON.stringify(result[0]));
                    res.send(result[0]);
                }
            });
        });
    };
};

/**
* Delete an entity
*/
exports.delete = function() {

    return function (req, res, next) {         
        var id = req.params.id;
        console.log('Deleting item: ' + id);
        db.collection(req.params.resource, function(err, collection) {
            collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
                if (err) {
                    res.send({'error':'An error has occurred - ' + err});
                } else {
                    console.log('' + result + ' document(s) deleted');
                    res.send(req.body);
                }
            });
        });
    };
};

/**
* List all entities 
*/
exports.list = function() {
  
  console.log('LIST ALL');
  
  return function(req, res, next) {
    
    db.collection(req.params.resource, function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
  }; 
};

/**
* Show entitie by ID 
*/
exports.show = function() {
  
    //console.log('SHOW BY ID');
  
    return function(req, res, next) {
    
        var id = req.params.id;
        
        //console.log('LIST ' + req.params.resource + ' BY ID ' + id);
        
        db.collection(req.params.resource, function(err, collection) {
            collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
                //console.log(err);
                //console.log(item);
                res.send(item);
            });
        });  
    }; 
};

/**
 * Update an entity by id
 */
exports.update = function() {

    return function (req, res, next) {
    
        var id = req.params.id;
        var item = req.body;
        
        console.log('Updating item: ' + id);
        console.log(JSON.stringify(item));
        
        db.collection(req.params.resource, function(err, collection) {
        
            //console.log(collection);
        
            collection.update({'_id':new BSON.ObjectID(id)}, item, {safe:true}, function(err, result) {
                if (err) {
                    console.log('Error updating item: ' + err);
                    res.send({'error':'An error has occurred'});
                } else {
                    console.log('' + result + ' document(s) updated');
                    res.send(item);
                }
            });
        });
    };
};

/*
* Expose the CRUD operations as REST APIs
*/
exports.setup = function(app, options) {
  
  console.log('Resource.js Setup()');
  
  options = options || {};
  
  //mongoose = options.mongoose || require('../db/mongo-store').mongoose;
  
  var base = options.path || '/api';
  
  // Setup specific resources
  vendor.setup(app, options);
  
  // @note what we are doing above, with vendor, can be abstracted to make a catch-all 
  // resource. This way we don't need a ton of extra function ie: getQuotesForVendor, getAppsForVendor, etc.
  // which would get messy very quickly. 
  // Instead we should save the above pattern for non-abstractable functions, such as
  // user/login or user/logout
  //app.get(base + '/:resource/:id/:children', exports.getChildrenForResource());
  
  // Create a new entity
  app.post(base + '/:resource', exports.create());

  // List the entities
  app.get(base + '/:resource', exports.list());

  // Find the entity by id
  app.get(base + '/:resource/:id', exports.show());

  // Update the entity by id
  app.put(base + '/:resource/:id', exports.update());

  // Delete the entity by id
  app.delete(base + '/:resource/:id', exports.delete());
  
  // Insure that app calls to /api/ will terminate with api response
  // without this line, calls that failed would render angular app. 
  app.get(base + '/*', exports.error());
  app.get(base, exports.error());
  
};

