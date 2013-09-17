/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Application = mongoose.model('Application'),
    Vendor = mongoose.model('Vendor'),
    _ = require('underscore');


/**
 * Find / query function, allows us to pass a mongodb style query over rest
 *
 * @todo change to GET!!! might require querystring module and will def require modifying angular service
 * @todo add to remaining controllers, currently only in application controller.
 *
 * @example { 'status' : 'open' } // gets all with status open
 * @example { 'status' : { '$nin' : ['open', 'archived', 'denied'] } } // gets all where status not in array
 *
 * @note these must be passed through JSON.stringify on the angular app side
 *
 */
exports.find = function(req, res, next) {

    // currently query is just request body
    var query = req.body;

    // limit quotes to sales rep only. 
    // @todo make this middleware, something like this: 
    /*
    if(userHasRole('salesRep')) {
        query.salesRep = req.user._id;
    }
    */

    if (req.user && req.user.role === 'salesRep') {
        query.salesRep = req.user._id;
    } else if (req.user && req.user.role === 'vendorRep') {
        query.vendorRep = req.user._id;
    }

    Application
        .find(query)
        .populate('vendorId')
        .exec(function(err, applications) {
            if (err) {
                res.failure(err);
            } else {
                res.ok(applications);
            }
        });
};

/**
 * Find application by id
 */
exports.application = function(req, res, next, id) {

    Application.load(id, function(err, application) {
        if (err) return res.failure(err);
        if (!application) return res.failure('No application was found', 404);
        req.application = application;
        next();
    });
};

/**
 * Create a application
 */
exports.create = function(req, res) {
    var application = new Application(req.body);

    application.save();
    res.ok(application);
};

/**
 * Update a application
 */
exports.update = function(req, res) {
    var application = req.application;

    application = _.extend(application, req.body);

    application.save(function(err) {
        res.ok(application);
    });
};

/**
 * Delete an application
 */
exports.destroy = function(req, res) {
    var application = req.application;

    application.remove(function(err) {
        if (err) {
            res.faulure(err);
        } else {
            res.ok(application);
        }
    });
};

/**
 * Show an application
 */
exports.show = function(req, res) {
    res.ok(req.application);
};

/**
 * List of Applications
 */
exports.all = function(req, res) {

    var where = {};

    // limit quotes to sales rep only. 
    if (req.userHasRole('salesRep')) {
        where = {
            salesRep: req.user._id
        };
    } else if (req.user.role === 'vendorRep') {
        where = {
            vendorRep: req.user._id
        };
    }

    Application.find(where).sort('-status -created').exec(function(err, applications) {
        if (err) {
            res.failure(err);
        } else {
            res.ok(applications);
        }
    });
};


/**
 * Get applications for a sales rep.
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
                res.failure(err, 500);
            } else {

                // extract the vendor ids from the results
                // this will be all vendors the user is associated with NOW! 
                // @note we don't store user ids with the quotes... because if at any point the vendor gets
                // a new sales rep, things would be out of sync. 
                var vendorIds = [];
                _.each(vendors, function(item) {
                    vendorIds.push(item._id);
                });
                getApplications(vendorIds);

            }
        });

    var getApplications = function(vendorIds) {

        Application
            .find()
            .where('vendorId')
            .in(vendorIds)
            .sort('-status -created')
            .exec(function(err, quotes) {
                if (err) {
                    res.failure(err);
                } else {
                    res.ok(quotes);
                }
            });
    };
};
