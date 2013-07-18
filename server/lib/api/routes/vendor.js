/**
* Setup Resource
*
*/
exports.setup = function(app, options) {
    
    // @todo set theis in one place, setting in each resource will get messy
    var base = options.path || '/api';
    
    // resource routes
    app.get(base + '/vendor/:id/programs', exports.getVendorProgramById());
    
};


exports.getVendorProgramById = function() {
    
    console.log('VENDOR PROGRAMS');
    
    return function(req, res) {
        
        res.send('Matt');
    };
    
};
