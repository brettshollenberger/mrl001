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
        console.log("Seeding the Database");
        populateDB();
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
  
    console.log('SHOW BY ID');
  
    return function(req, res, next) {
    
        var id = req.params.id;
        
        console.log('LIST ' + req.params.resource + ' BY ID ' + id);
        
        db.collection(req.params.resource, function(err, collection) {
            collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
                console.log(err);
                console.log(item);
                res.send(item);
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
  //app.post(base + '/:resource', exports.create(mongoose));

  // List the entities
  app.get(base + '/:resource', exports.list());

  // Find the entity by id
  app.get(base + '/:resource/:id', exports.show());

  // Update the entity by id
  //app.put(base + '/:resource/:id', exports.updateById(mongoose));

  // Delete the entity by id
  //app.delete(base + '/:resource/:id', exports.deleteById(mongoose));
  
  // Insure that app calls to /api/ will terminate with api response
  // without this line, calls that failed would render angular app. 
  app.get(base + '/*', exports.error());
  app.get(base, exports.error());
  
};

/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function() {
    
    var resources = {};
 
    resources.vendors = [{
        name: 'BearCom Operating LLC',
        contactPerson: {
            name: 'Jenn Delong',
            email: 'jdelong@marlinfinance.com',
            phone: '888-479-9111 Ext. 5015'
        },
        logo: {
            original: 'https://www.filepicker.io/api/file/2v44yfa8TqKt2RAAkpZB'  
        },
        website: 'http://www.bearcom.com/',
        legalTerms: 'These are legal terms for vendor 1',
        businessPhone: '',
        businessAddress: {
            address1: '4009 Distribution Dr.',
            address2: 'Bldg 200',
            city: 'Garland',
            state: 'TX',
            zip: '75041'
        },
        programIds: [1,3,4], // @note these need to match the GUIDs for programs
        //salesRep: User.getOneWhereIn('vendorIds', 1),
        programs: [{
            id: 1,
            displayName: 'A Custom Display Name for Program 1'
        }]
    },
    {
        name: 'Protection One - West',
        contactPerson: {
            name: 'Jennifer DeLong-Giefer',
            email: 'jdelong@marlinfinance.com',
            phone: '866-687-3778'
        },
        logo: {
            original: 'https://www.filepicker.io/api/file/ZxTd0qV0QA2ek9HHSmu3'  
        },
        website: 'http://www.protection1.com/',
        legalTerms: 'These are legal terms for vendor 2',
        businessPhone: '',
        businessAddress: {
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: ''
        },
        programIds: [1,3,4],
        //salesRep: User.getOneWhereIn('vendorIds', 1),
        programs: [{
            id: 1,
            displayName: 'A Custom Display Name for Program 1'
        }]
    },
    {
        name: 'Gametime',
        contactPerson: {
            name: 'Warren Myers',
            email: 'wmyers@playcore.com',
            phone: ''
        },
        logo: {
            original: 'https://www.filepicker.io/api/file/EcryKofERBynAuL2txez'  
        },
        website: 'http://www.gametime.com',
        legalTerms: 'These are legal terms for vendor 3',
        businessPhone: '',
        businessAddress: {
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: ''
        },
        programIds: [1,3,4],
        //salesRep: User.getOneWhereIn('vendorIds', 1),
        programs: [{
            id: 1,
            displayName: 'A Custom Display Name for Program 1'
        }]
    },
    {
        name: 'Union Bank',
        contactPerson: {
            name: 'Union Bank Financing Consultant',
            email: 'ubapps@marlinfinance.com',
            phone: '877-307-6756'
        },
        logo: {
            original: 'https://www.filepicker.io/api/file/yjlOg28UROmPXyK8uadA'  
        },
        website: 'https://www.unionbank.com/',
        legalTerms: 'These are legal terms for vendor 3',
        businessPhone: '',
        businessAddress: {
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: ''
        },
        programIds: [1,3,4],
        //salesRep: User.getOneWhereIn('vendorIds', 1),
        programs: [{
            id: 1,
            displayName: 'A Custom Display Name for Program 1'
        }]
    },
    {
        name: 'Southeastern Equipment & Supply, Inc.',
        contactPerson: {
            name: 'Grady Martin',
            email: 'leasing@southeasternequipment.net',
            phone: '803-454-3656'
        },
        logo: {
            original: 'https://www.filepicker.io/api/file/nvC3zhiTQoSl01P7K3Br'  
        },
        website: 'https://www.unionbank.com/',
        legalTerms: 'These are legal terms for vendor 3',
        businessPhone: '',
        businessAddress: {
            address1: '1919 Old Dunbar Road',
            address2: '',
            city: 'West Columbia',
            state: 'SC',
            zip: '29045'
        },
        programIds: [1,3,4],
        //salesRep: User.getOneWhereIn('vendorIds', 1),
        programs: [{
            id: 1,
            displayName: 'A Custom Display Name for Program 1'
        }]
    }];
 
    var insertResource = function(resource) {
        
        // get the collection
        db.collection(resource, function(err, collection) {
            // drop the collection
            collection.drop(function(err, reply) {
               console.log('Drop ' + resource + ' Collection');
            });
            // insert the collection
            collection.insert(resources[resource], {w:1}, function(err, result) {
               console.log('Create ' + resource + ' Collection');
            });
        });
    };
    
    // iterate over all of the resources to add to database
    for (var resource in resources) {
        insertResource(resource);
    }
};