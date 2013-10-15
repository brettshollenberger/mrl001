/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Quote = mongoose.model('Quote'),
    Vendor = mongoose.model('Vendor'),
    emailer = require('./../emails/init'),
    _ = require('underscore'),
    natural = require('natural'),
    nounInflector = new natural.NounInflector(),
    numeral = require('numeral'),
    currency = require('./../helpers/currency');


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
* ----------------------------------------
* Middleware called when accessing public quoter api
* validates that required fields are present, then calls next
* 
* @note we use this because it allows us to send a more specific error message
*       then what mongoose validation would normally throw.
*       It also allows us to process, trim, etc. 
*
* ----------------------------------------
* 
*/
exports.validateQuoteRequest = function(req, res, next) {
    
    // support instances of updating existing quote, PUT requests, where
    // req.quote will be set instead of req.body
    req.body.totalCost = req.body.totalCost || req.quote && req.quote.totalCost || null;
    req.body.description = req.body.description || req.quote && req.quote.description || null;
    
    // message user for required totalCost   
    if(!req.body.totalCost) {
        return res.failure("totalCost is required", 400); 
    } 
    
    // message user for required totalCost  
    if(!req.body.description) {
        return res.failure("description is required", 400);
    } 
    
    // format total cost toCents, supporting error callback if conversion fails
    currency.toCents(req.body.totalCost, function(err, result) {
        if(err) return res.failure(err, 400);
        req.body.totalCost = result;
        next();
    });
    
};


/**
* ----------------------------------------
* Applies rate to cost 
* ----------------------------------------
*/
var applyRateToCost = function(totalCost, rate) {
    
    // adjust rate for the fact we are doing all calculations in cents
    rate = rate / 100;
    
    var payment = rate * totalCost;
    
    return payment;
    
};

/**
* ----------------------------------------
* Formats and rounds currecny
* ----------------------------------------
*/
var formatPayment = function(payment) {

    return numeral(payment).format('$0,0.00');
    
};

/**
* ----------------------------------------
* Handle no programs found for this quote
* ----------------------------------------
*/
var handleNoPrograms = function(req, res, next) {
    
    var response = {};
    
    response.message = "We couldn't generate a quote for you based on this total cost. Please contact us to arrange special financing.";
    
    // @todo confirm with Brian that we can show contactPerson info, and not vendor phone
    // which is what current system does. 
    response.contact = req.vendor.contactPerson;
    
    res.failure(response, 200);
    
};


/**
 * ----------------------------------------
 * Create a quote
 * ----------------------------------------
 */
exports.createOrUpdate = function(req, res) {
    
    // shorthand for our request totalcost
    // @note we have alreay validated it exists
    // @todo convert if decimal places and strip commas
    var totalCost = req.body.totalCost;
    var programs = req.vendor.toObject().programs;
    
   
    /**
    * ----------------------------------------
    * Main logic to iterate though programs and build a quote for the end user
    *
    * @note this logic creates one array of buyout options, even if a vendor has multiple programs
    *       each option is saved with the program name as reference... so we can group them 
    *       by program before returning them to user. We do this because it makes it very easy to 
    *       check if any options were returned, !filteredPrograms.length 
    * 
    * ----------------------------------------      
    */
    
    // this will hold out final filtered programs based on the cost range
    //
    var filteredPrograms = [];
    
    
    // vendors can have multiple programs, so first iterate through these
    //
    _.each(programs, function(program, $programIdx) {

        // next, lets iterate though the buyout options
        // 
        _.each(program.rateSheet.buyoutOptions, function(buyOutOption, $buyOutIdx) {
            
            // save our match if we find one
            var matchedOption = null;
            
            // each buyout option will have an array of costs, each with a min and max value
            // iterate though each of these, looking for a a cost range that our totalCost falls between
            //
            _.each(buyOutOption.costs, function(cost, $costIdx) {

                // if the totalCost is within the min and max for this cost range, 
                // we want to save this cost as "THE" cost for this buyout option.
                // in other words, we want to replace the array of perhaps 5 buyout options
                // with just this one
                //
                
                // @note since we only storing cost ranges to dolar value accurary, 
                //       we need to account for the true range of this dollar value by 
                //       adding 99 cents, so that 1000 - 5000 is actually 1000 - 5000.99
                //       and this way a quote for 5000.80 doesn't get ignored
                cost.max += 99;
                
                if (cost && totalCost >= cost.min && totalCost <= cost.max) {
                    
                    // replace the buyoutOption costs with THE cost
                    buyOutOption.costs = buyOutOption.costs[$costIdx];
                    
                    // do some additional processing of the object
                    // saving program info onto the buyout option
                    // which allows us to store one level option
                    buyOutOption.programName = program.name;
                    buyOutOption.termPeriod = program.rateSheet.termPeriod;
                    
                    // remove IDs and such since we don't need them on the front end
                    delete buyOutOption._id;
                    delete buyOutOption.costs._id;
                    
                    matchedOption = buyOutOption;
                    
                    // no longer a need to iterate though
                    return;
                
                }  else {
                    //console.log('%s is not within %s and %s', totalCost, cost.min, cost.max);
                }

            });
            
            // push to our filtered array. This gives us one array where all programs are mixed
            // together, but we can always group them later by programName
            if(matchedOption) filteredPrograms.push(matchedOption);

        });        
        
    });   
 

    /**
    * ----------------------------------------
    * Process filtered programs, for each one factoring the rate * totalCost
    * and assembling other bits and pieces as needed for return
    * ----------------------------------------
    *
    */
        
    // our returned quote   
    var returnQuote = [];
    
    // iterate through our rates
    // we might have multiple rates for multiple programs. 
    // we'll do some calculations to turn a rate into a payment
    _.each(filteredPrograms, function(program) {
       
       // create empty return array
       var termAndRates = [];
       
       // pluralize our term period
       program.termPeriodPlural = nounInflector.pluralize(program.termPeriod);
       
       // iterate thorugh terms, check if a rate for this term exists and is not 0
       // in some cases rates will be 0 if its not a supported term. 
       // @todo test that Marlin's formula works when multiplying by cents, not just dollars
       _.each(program.terms, function(term, key) {
           
           // if there is no payment info, ie there is no rate, 
           // don't include it. In some cases the rate will be '0' if not being used. 
           if(program.costs.rates[key] === 0 || program.costs.rates[key] === null || typeof program.costs.rates[key] !== 'number') {
                return;
           }
           
           var payment = applyRateToCost(totalCost, program.costs.rates[key]);
           
           termAndRates.push({
               
               // term + plurized version of term length
               term: term + ' ' + program.termPeriodPlural,
               termPeriod: program.termPeriod,
               
               // rate for testing @todo remove for production
               rate: program.costs.rates[key],
               
               // payment
               payment: payment,
               paymentDisplay: formatPayment(payment),
               
               // totalCost thus far is in cents, lets convert back
               totalCost: totalCost / 100, 
               totalCostDisplay: formatPayment(totalCost / 100),
               
               programName: program.programName,
               buyoutOption: program.name
               
           });
           
       });
       
       // delete stuff and push
       program.rates = termAndRates;
       delete program.costs;
       delete program.terms;
       
       returnQuote.push(program);
        
    });
    
    
    /**
    * ----------------------------------------
    * Group by program name
    * ----------------------------------------
    *
    */
    returnQuote = _.groupBy(returnQuote, function(item) {
        return item.programName;
    });


    /**
    * ----------------------------------------
    * Handle case where Quote is not within range
    * @todo capture these leads by sending email to sales and vendor rep 
    * ----------------------------------------
    *
    */
    if(filteredPrograms.length === 0) {
        return handleNoPrograms(req, res);
    } 
    
    
    /**
    * ----------------------------------------
    * Save the quote to the database
    * ----------------------------------------
    *
    * 
    */    
    
    // try to get quote from request 
    var quote = req.quote || null;

    // update or create a quote
    if(quote) {
        quote = _.extend(quote, req.body);
    } else {
        quote = new Quote(req.body);
    }
    
    // add payments data to it
    // payments is {} in database, so we can efficiently store entire object here
    quote.payments = returnQuote;
    
    // adjust totalCost so it's back to dollars
    quote.totalCost = quote.totalCost / 100;
    quote.totalCostDisplay = formatPayment(quote.totalCost);
    
    // finally, save the quote  
    quote.save(function(err) {
        
        // handle error case
        if (err) return res.failure(err);
            
        // delete some things we dont want to be public
        // @todo later we should all more robust access controll, since the "get" method needs this also
        //delete quote.vendorId;
        //delete quote.salesRep;
        //delete quote.vendorRep;
    
        // send result to user
        res.ok(quote);
        
        // get the quote we just saved and trigger emails to end user
        // @note this is async so it will not delay response to user
        Quote
            .findOne({_id : quote._id})
            .populate('vendorId vendorRep salesRep')
            .exec(function(err, result) {
                                    
                if(err) return;
                                
                emailer.newQuoteEndUser(req, result);
                emailer.newQuoteSalesRep(req, result);
                emailer.newQuoteVendorRep(req, result);
                
        });
        
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
