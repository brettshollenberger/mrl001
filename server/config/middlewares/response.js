/**
* Extend res with custom response formats, that we can use in our controllers. 
* @todo more to middleware folders
*
*/

exports.middleware = function() {
   
   return function(req, res, next) {
        res.ok = function(data, message) {
            
            // create default response object
            var resultObj =  {
                meta: {
                    code: 200
                },
                result: data
            };
            
            // optionally add a message
            if(message) resultObj.meta.message = message;
            
            // respond, ending this request
            res.json(resultObj, 200);
        };
        
        res.failure = function(message, code) {
            code = code || 500;
            
            // create default template
            var responseObj = {
                meta: { 
                    code: code,
                    message: message
                }
            };
            
            // add the message. We check if "message" key is already set
            // because in some cases, such as validation failure, a detailed message object is already 
            // returned, so we don't want message.message as part of our return
            
            if(typeof message === 'object' && message.message) {
               responseObj.meta = message;
               responseObj.meta.code = code;
            }
            
            res.json(responseObj, code);
        };
        
        next();
    }; 
};

