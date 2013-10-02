var mongoose = require('mongoose')
  , User = mongoose.model('User')
  , Vendor = mongoose.model('Vendor')
  ;


/**
* Validates api key by getting key from header, looking up vendor with matching key, and then
*  saving vendorId within req.body.vendorId. This allows us to access the vendor in our quote
*  controller. 
*
* @todo move out of auth and into api file.
*
* -----
* 
* @note we might consider saivng the vendor
* @todo this could be a great 'api-module' for NPM, if we add throttle, access count, etc. 
* @note module could automatically add fields to mongoose model, as a plugin.
*
*/
exports.validateApiKey = function(req, res, next) {
    
    // get key from the header
    var key = req.header('MARLIN-API-KEY');
    
    // require an API key
    if(!key) {
        return res.failure("An API key is required. Please include 'MARLIN-API-KEY' in your header.", 400);
    }
    
    // lookup vendor by API key
    Vendor
        .findOne({apiKey : key, 'tools.api.enabled' : true})
        .exec(function(err, vendor) {
           
           // check for error or no vendor found
           if(err) return res.failure(err);
           if(!vendor) return res.failure('Not a valid API key', 400);
           
           // @note this should be hooked up to an api access log at some point
           console.info("%s successfully authenticated public API with key '%s'", vendor.name, vendor.apiKey); 
           
           req.vendor = vendor;
           
           // save vendor for access in quote controller
           req.body.vendorId = vendor._id;
           
           // move on to next middleware
           next();
            
        });    
};
