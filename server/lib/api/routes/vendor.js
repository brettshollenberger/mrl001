/**
* Setup Resource
*
*/
exports.setup = function(app, options) {
    
    // @todo set theis in one place, setting in each resource will get messy
    var base = options.path || '/api/v1';
    
    // resource routes
    app.get(base + '/vendor/:id/testFunction', exports.testFunction()); 
    app.get(base + '/custom/vendor/without-reps', exports.withoutReps());    
};

exports.testFunction = function() {
    
    console.log('TEST FUNCTION');

    return function(req, res) {
        res.send('Matt');
    };
};


exports.withoutReps = function() {
    
    
    
    return function(req, res) {
        
        db.collection('user', function(err, collection) {
            
            console.log('WITHOUT REPS');
            
            // we'll be mapping our users
            // for each vendorIds, the key is vendor if and value is user
            var getVendorIdsFromUsers = function() {
              for(var i in this.vendorIds){
                emit(this.email, this.vendorIds[i]);
              }
            };
            
            
            var collectVendorIds = function(key, values) {
                rep_list = { 
                    vendors: [],
                    totalVendors: 0
                };
                for(var i in values) {
                    rep_list.vendors.push(values[i]);
                    rep_list.totalVendors ++;
                }
                return rep_list;
            };
           
/*

            var map = function(){
              emit(this.vendorIds, 1);
            };
            var reduce = function(key, values){
              var res = 0;
              values.forEach(function(k){ k += 1;});
              return {count: res};
            };
*/
        
            collection.mapReduce(getVendorIdsFromUsers, collectVendorIds, {out: {inline:1}}, function(err, items) {
                console.log('MAP reduce');
                
                if(err) {
                    console.log('ERROR: ' + err);
                } else {
                    console.log(items);
                    /*

                    for(var i in items) {
                        console.log(items[i]);
                    }
*/
                    
                }
                
                
                
                
            });
        
            /*
collection.find().toArray(function(err, items) {
                
                if(err) res.send({'error':'An error has occurred - ' + err});
                if(!items) res.send({error : 'No results'});
                
                console.log('found ' + items.length + ' items');
                //console.log(items);
                
                res.send(items);
            });
*/
        });
    };
};