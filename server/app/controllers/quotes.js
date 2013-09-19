/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Quote = mongoose.model('Quote'),
    Vendor = mongoose.model('Vendor'),
    _ = require('underscore');


/**
 * Find quote by id
 */
exports.quote = function(req, res, next, id) {
    Quote.load(id, function(err, quote) {
        if (err) return next(err);
        if (!quote) return res.failure('Failed to load quote ' + id, 404);
        req.quote = quote;
        next();
    });
};


/**
 * Create a quote
 */
exports.create = function(req, res) {

    var quote = new Quote(req.body);

    quote.save(function(err) {
        console.log(err);
        if (err) {
            return res.failure(err);
        } else {
            res.ok(quote);
            
            emailQuoter(req, quote);
            emailSalesRep(req, quote);
            
        }
    });

};


/**
* Send a new email to end user when they get a quote 
*
* @todo add file to this email
*
*/
var emailQuoter = function(req, quote) {
    
    // check for valid email
    // @todo this check is in the email.js module, but it throws an error. Should 
    // we change that and eliminate the check here? 
    if(!quote.company.contactPerson.email) return false;
 
    var locals = {
        to: {
            email: quote.company.contactPerson.email,
            fullName: quote.company.contactPerson.name
        },
        variables: {
            link: quote.quoterToolLink, // a virtual property of quote model
            fullName: quote.company.contactPerson.name
        }            
    };
    
    // @note we could just as well store this in req.emailer instead of req.app.locals.emailer
    req.app.emailer.send('new-quote-requester', locals);            
    
};


/**
* Email salesRep that a quote is 
*
*
*/
var emailSalesRep = function(req, quote) {
   
    if(!quote.salesRep) {
        // @todo send a default email to system admin!
        console.warn('A quote was generated for a vendor with no Marlin Sales Rep');
        return;
    }
   
    var User = mongoose.model('User');
   
    User.load(quote.salesRep, function(err, salesRep) {
     
        // abort if there is an error or salesRep has no email
        // @todo this error checking should be more robust. Again, we should consider moving check into 
        // the emails module, and even adding more 
        if(err || !salesRep.email) return false;
     
        console.log('Sales rep is...');
        console.log(salesRep);
     
        var locals = {
            to: {
                email: salesRep.email,
                fullName: salesRep.fullname
            },
            variables: {
                link: quote.quoterToolLink, // a virtual property of quote model
                vendorName: quote.company.contactPerson.name,
                dateTime: quote.created,
                salesRepName: salesRep.fullname
            }            
        };
        
        // @note we could just as well store this in req.emailer instead of req.app.locals.emailer
        req.app.emailer.send('new-quote-salesRep', locals); 
    });
       
};


/**
 * Update a quote
 */
exports.update = function(req, res) {
    var quote = req.quote;

    quote = _.extend(quote, req.body);

    quote.save(function(err) {
        res.ok(quote);
    });
};


/**
 * Delete an quote
 */
exports.destroy = function(req, res) {
    var quote = req.quote;

    quote.remove(function(err) {
        if (err) {
            res.failure(err);
        } else {
            res.ok(quote);
        }
    });
};


/**
 * Show an quote
 */
exports.show = function(req, res) {
    res.ok(req.quote);
};


/**
 * List of Quotes
 */
exports.all = function(req, res) {

    var where = {};

    // limit quotes to sales rep only. 
    if (req.userHasRole('salesRep')) {
        where = {
            salesRep: req.user._id
        };
    } else if (req.userHasRole('vendorRep')) {
        where = {
            vendorRep: req.user._id
        };
    }

    Quote
        .find(where)
        .sort('-status -created')
    //.populate('vendorId salesRep')
    .exec(function(err, quotes) {
        if (err) {
            res.failure(err);
        } else {
            res.ok(quotes);
        }
    });

};


/**
 * Get quotes for a sales rep.
 *
 * @note This can be used to limit quotes when a user is logged in, or
 *       it can be used for a resource/:id/children instance (if we modify the way we get user id)
 *
 */
exports.getAllForSalesRep = function(req, res) {

    // First get all vendors for this sales rep.
    Vendor
        .where('salesRep')
        .equals(req.user._id)
        .find()
        .select('_id')
        .exec(function(err, vendors) {
            if (err) {
                res.failure(err);
            } else {

                // extract the vendor ids from the results
                // this will be all vendors the user is associated with NOW! 
                // @note we don't store user ids with the quotes... because if at any point the vendor gets
                // a new sales rep, things would be out of sync. 
                var vendorIds = [];
                _.each(vendors, function(item) {
                    vendorIds.push(item._id);
                });
                getQuotes(vendorIds);

            }
        });

    var getQuotes = function(vendorIds) {

        Quote
            .find()
            .where('vendorId')
            .in(vendorIds)
            .sort('-status -created')
            .exec(function(err, quotes) {
                if (err) {
                    res.failure(err);
                } else {
                    res.ok(quotes, 'Getting quotes for salesRep ' + req.user.fullName);
                }
            });
    };
};
