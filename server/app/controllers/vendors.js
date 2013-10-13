/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Vendor = mongoose.model('Vendor'),
    _ = require('underscore');


/**
 * Find vendor by id
 */
exports.vendor = function(req, res, next, id) {

    Vendor.load(id, function(err, vendor) {
        if (err) return next(err);
        if (!vendor) {
            return res.failure('No results', 404);
        }
        req.vendor = vendor;
        next();
    });
};

/**
 * Find vendor by req.body.vendorId or req.params.vendorId
 * @todo this should be able to piggy back on exports.vendor by checkig for params and body if
 *    id doesn't exist ad the 4th param. However this was not working and causing errors.
 *
 */
exports.findByBodyOrParams = function(req, res, next) {
    
    var id = null;

    if(req.body && req.body.vendorId) {
        id = req.body.vendorId;
    } else if(req.params && req.params.vendorId) {
        id = req.params.vendorId;
    }
    
    if(!id) return res.failure('missing vendor id');

    Vendor.load(id, function(err, vendor) {
        if (err) return next(err);
        if (!vendor) {
            return res.failure('No results', 404);
        }
        req.vendor = vendor;
        next();
    });
};

/**
 * Create a vendor
 */
exports.create = function(req, res) {
    var vendor = new Vendor(req.body);

    vendor.save();
    res.ok(vendor);
};

/**
 * Update a vendor
 */
exports.update = function(req, res) {
    var vendor = req.vendor;

    vendor = _.extend(vendor, req.body);

    vendor.save(function(err) {
        Vendor.load(vendor._id, function(err, updatedVendor) {
            if (err) return next(err);
            res.ok(updatedVendor);
        });
    });
};

/**
 * Delete an vendor
 */
exports.destroy = function(req, res) {
    var vendor = req.vendor;

    vendor.remove(function(err) {
        if (err) {
            res.failure(err);
        } else {
            res.ok(vendor);
        }
    });
};

/**
 * Show an vendor
 */
exports.show = function(req, res) {
    res.ok(req.vendor);
};


exports.allForSalesRep = function(req, res) {

    var userId = req.user._id;

    Vendor
        .where('salesRep')
        .equals(userId)
        .find()
        .sort('-created')
        .populate('programIds programs salesRep')
        .exec(function(err, vendors) {
            if (err) {
                res.failure(err);
            } else {
                res.ok(vendors);
            }
        });

};


/**
 * List of Vendors
 */
exports.all = function(req, res) {

    var where = {};
    var populate = 'programIds programs salesRep vendorRep';
    var select = '';

    // limit quotes to sales rep only. 
    if (req.userHasRole('admin')) {
        // nothing, admin can see all!
    } else if (req.userHasRole('salesRep')) {
        where = {
            salesRep: req.user._id
        };
    } else if (req.userHasRole('vendorRep')) {
        where = {
            vendorRep: req.user._id
        };
    } else {
        populate = '';
        select = 'name _id logo customField geo tools tags searchString whiteLabel range website';
    }

    Vendor
        .find(where)
        .select(select)
        .sort('-name')
        .populate(populate)
        .exec(function(err, vendors) {
            if (err) {
                res.failure(err);
            } else {
                res.ok(vendors);
            }
        });
};

/**
 * List of Vendors
 */
exports.listForUser = function(req, res) {

    var where = {};

    var id = req.params.userId;

    if (id) {
        where = {
            $or: [{
                salesRep: id
            }, {
                vendorRep: id
            }]
        };
    }

    Vendor
        .find(where)
        .sort('-name')
        .populate('programIds programs salesRep vendorRep')
        .exec(function(err, vendors) {
            if (err) {
                res.failure(err);
            } else {
                res.ok(vendors);
            }
        });
};

/**
 * List of Vendors
 */
exports.listNotForUser = function(req, res) {

    var where = {};

    var id = req.params.userId;

    if (id) {
        where = {
            $nor: [{
                salesRep: id
            }, {
                vendorRep: id
            }]
        };
    }

    Vendor
        .find(where)
        .sort('-name')
        .populate('programIds programs salesRep vendorRep')
        .exec(function(err, vendors) {
            if (err) {
                res.failure(err);
            } else {
                res.ok(vendors);
            }
        });
};



/**
 * List of Vendors
 */
exports.getAllNames = function(req, res) {
    Vendor
        .find()
        .select('_id name')
        .sort('-created')
        .populate('programIds salesRep programs')
        .exec(function(err, vendors) {
            if (err) {
                res.failure(err);
            } else {
                res.ok(vendors);
            }
        });
};

/**
 * Get distinct vendor tags
 *
 */
exports.getDistinctTags = function(req, res) {
    Vendor.distinct(req.params.tagType, {}, function (err, result) {
        if (err) res.failure(err);
        res.ok(result);
    });
};


/**
 * Get programs for a vendor
 *
 */
var Program = mongoose.model('Program');

exports.getCurrentVendorPrograms = function(req, res) {
    res.ok(req.vendor.programs);
};


exports.getAvailableVendorPrograms = function(req, res) {
    var theIds = _.pluck(req.vendor.programs, '_id');
    if (!theIds) theIds = [];
    Program.find().where('_id').nin(theIds).sort('-created').exec(function(err, programs) {
        if (err) {
            res.failure(err);
        } else {
            res.ok(programs);
        }
    });
};


exports.getSalesRep = function(req, res) {
    res.ok(req.vendor.salesRep);
};
