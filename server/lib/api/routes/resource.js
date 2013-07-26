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


function generateBSON(id) {
    try {
        var bsonID = new BSON.ObjectID(id);
        console.log('BSON ID CREATED: ' + bsonID);
        return bsonID;
    } 
    catch(e) {
        console.log('ERROR: ' + e);
        return false;   
    }
}


/**
* Show specific children elements of an entity by ID 
*/
exports.children = function() {
  
    console.log('SHOW CHILDREN ELEMENTS BY ID');
  
    return function(req, res, next) {
    
        var resource = req.params.resource,
            id = generateBSON(req.params.id),
            child = req.params.child,
            field = child + 'Ids',
            guidsPlain = [],
            guidsBson = []
        ;
        
        if(!id) res.send({error: 'Invalid ID'}, 404);
        
        console.log('LIST ' + child + ' ATTACHED TO ' + resource + ' BY ID ' + id);
        
        // Get the parent object
        db.collection(resource, function(err, collection) {
            collection.findOne({ '_id' : id }, function(err, item) {
                
                console.log(item);
                
                if(err) res.send({'error':'An error has occurred - ' + err});
                if(!item) res.send({error : 'This ' + resource + ' was not found'});
                
                guidsPlain = item[field];
                
                if(guidsPlain instanceof Array) {
                
                    // convert all of the guids to BSON Object ID's
                    for(var i in guidsPlain) {
                        guidsBson.push(generateBSON(guidsPlain[i]));
                    }
                
                    db.collection(child, function(err, collection) {
                        collection.find({ '_id' : { $in : guidsBson }}).toArray(function(err, items) {
                            
                            if(err) res.send({'error':'An error has occurred - ' + err});
                            if(!items) res.send({error : 'This ' + resource + ' has no ' + child });
                            
                            res.send(items);
                        });
                    });                               
                } else {
                    res.send({error : 'This ' + resource + ' has no ' + child });
                }
            });
        });
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
        
        var id = generateBSON(req.params.id);
        if(!id) res.send({error: 'Invalid ID'}, 404);
        
        console.log('Deleting item: ' + id);
        
        db.collection(req.params.resource, function(err, collection) {
            collection.remove({'_id': id}, {safe:true}, function(err, result) {
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
*
* @param    query   {object} url enoded JSON object containing an advanced MongoDB query. 
*                   ex: { email: /m.*@/i } gets all emails starting with letter 'm'
*                   ex: { email: 'matt@facultycreative.com' } gets only documents matching exact email
*
* @param    fields  {object} indicates which fields to include or exclude 
*                   ex: {name: 1, email: 1} only include name and email (and always _id)
*                   ex: {name: 0, email: 0} include all except and email
*
* @param    options {object|string} specify limit, sort, skip, etc.
*                   ex: query={}&options={limit: 1, skip: 2}
*                   ex: query={}&limit=1&skip=2
*
* @note options can be an object or specific properties.
* @note query can be regex, or complex nexted object style query 
*
* @see http://docs.mongodb.org/manual/reference/sql-comparison/ (mysql to MongoDB)
* @see https://github.com/mongodb/node-mongodb-native (native mongodb library)
* @see http://docs.mongodb.org/manual/reference/operator/ (query operators)
*
* @note objects should be uri encoded before sending. 
* @note since REGEX objects don't travel well as request params, 
*       you MUST use the more elaborate syntax below. Note the differences
*
* @note options can't have the $ prefix, while query operators need this!
*
*/
exports.list = function() {
  
  console.log('LIST ALL');
  
  return function(req, res, next) {
  
    var query, options, fields;
    
    // set variables to user input, or default
    query = req.query.query ? JSON.parse(req.query.query) : {};
    fields = req.query.fields || null;
    options = req.query.options ? JSON.parse(req.query.options) : {};
      
    // try to set supported options
    // this will override and options object sent
    var test = ['limit','sort','skip','hint','explain','snapshot','timeout'];
    for( var o in req.query ) {
        if( test.indexOf(o) >= 0 ) {
          options[o] = req.query[o];
        } 
    }
    
    // uncomment for debugging
    // the following queries have been tested and work. Use if the front end is not behaving.
    //fields = {'email' : 1, 'name' : 1};
    //options = {limit : 1};
    //query = { email: /s.*@/i};
    //query = { "email": { "$regex": "s.*@", "$options" : "i" }};
   
    //query = {salesRepId : generateBSON("51e71518ed32080ffc000016")};
    
    
    if(query.salesRepId && !query.salesRepId.$ne) {
        query.salesRepId = generateBSON(query.salesRepId);
        console.log('Converting salesRepId to BSON');
    }
    
    if(query.salesRepId && query.salesRepId.$ne) {
        query.salesRepId.$ne = generateBSON(query.salesRepId.$ne);
        console.log('Converting $ne salesRepId to BSON');
    }
    
    
    db.collection(req.params.resource, function(err, collection) {
        collection.find(query, fields, options).toArray(function(err, items) {
            
/*
            console.log('resource is IS...');
            console.log(req.params.resource);
            
            console.log('query IS...');
            console.log(query);
            console.log('options IS...');
            console.log(options);
            console.log('fields IS...');
            console.log(fields);
*/
            
            if(err) res.send({'error':'An error has occurred - ' + err});
            if(!items) res.send({error : 'No results'});
            
            console.log('found ' + items.length + ' items');
            //console.log(items);
            
            res.send(items);
        });
    });
  }; 
};

/**
* Show entity by ID 
*/
exports.show = function() {
  
    console.log('SHOW BY ID');
  
    return function(req, res, next) {
    
        // try to generate BSON id and send error if generation fails
        var id = generateBSON(req.params.id);
        if(!id) res.send({error: 'Invalid ID'}, 404);
        
        console.log('LIST ' + req.params.resource + ' BY ID ' + id);
        
        db.collection(req.params.resource, function(err, collection) {
            collection.findOne({'_id': id}, function(err, item) {
                
                //console.log(err);
                //console.log(item);
                
                if(err) res.send({'error':'An error has occurred - ' + err}, 404);
                if(!item) res.send({error : 'No results'}, 404);
                
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
    
        // try to generate BSON id and send error if generation fails
        var id = generateBSON(req.params.id);
        if(!id) res.send({error: 'Invalid ID'}, 404);
        
        var item = req.body;
        
        console.log('Updating item: ' + id);
        console.log(JSON.stringify(item));
        
        db.collection(req.params.resource, function(err, collection) {
        
            //console.log(collection);
        
            collection.update({'_id':id}, item, {safe:true}, function(err, result) {
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
  
  var base = options.path || '/api/v1';
  
  // Setup specific resources
  vendor.setup(app, options);
  
  // Get child resources of another resource
  app.get(base + '/:resource/:id/:child', exports.children());
  
  // Create a new entity
  app.post(base + '/:resource', exports.create());
  
    // Delete the entity by id
  app.delete(base + '/:resource/:id', exports.delete());

  // List the entities
  app.get(base + '/:resource', exports.list());

  // Find the entity by id
  app.get(base + '/:resource/:id', exports.show());

  // Update the entity by id
  app.put(base + '/:resource/:id', exports.update());
  
  // Insure that app calls to /api/ will terminate with api response
  // without this line, calls that failed would render angular app. 
  app.get(base + '/*', exports.error());
  app.get(base, exports.error());
  
};