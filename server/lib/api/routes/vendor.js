/**
* Setup Resource
*
*/
exports.setup = function(app, options) {
    
    // @todo set theis in one place, setting in each resource will get messy
    var base = options.path || '/api/v1';
    
    // resource routes
    app.get(base + '/vendor/:id/testFunction', exports.testFunction());    
};

exports.testFunction = function() {
    
    console.log('TEST FUNCTION');

    return function(req, res) {
        res.send('Matt');
    };
};
