/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    env = process.env.NODE_ENV || 'development',
    config = require('../../config/config')[env],
    Schema = mongoose.Schema,
    _ = require('lodash');

var customNameSchema = new Schema({
    type: Schema.ObjectId,
    displayName: String
});

var toolEnabledSchema = new Schema({
    "name": String,
    "active": Boolean,
    "slug": String
});

/**
 * Vendor Schema
 * @todo refactor tools to be use slug as keys? is this possible?
 */
var VendorSchema = new Schema({
    "created": {
        type: Date,
        "default": Date.now
    },
    "searchString" : {
        type: String,
        "default": ''
    },
    "name": {
        type: String,
        "default": '',
        trim: true
    },
    "contactPerson": {
        "name": {
            type: String,
            "default": '',
            trim: true
        },
        "email": {
            type: String,
            "default": '',
            trim: true
        },
        "phone": {
            type: String,
            "default": '',
            trim: true
        }
    },
    "salesRep": {
        type: Schema.ObjectId,
        ref: 'User'
    },
    "vendorRep": {
        type: Schema.ObjectId,
        ref: 'User'
    },
    "logo": {
        "original": {
            type: String,
            "default": '',
            trim: true
        }
    },
    "website": {
        type: String,
        "default": '',
        trim: true
    },
    "legalTerms": {
        type: String,
        "default": '',
        trim: true
    },
    "businessPhone": {
        type: String,
        "default": '',
        trim: true
    },
    "businessAddress": {
        "address1": {
            type: String,
            "default": '',
            trim: true
        },
        "address2": {
            type: String,
            "default": '',
            trim: true
        },
        "city": {
            type: String,
            "default": '',
            trim: true
        },
        "state": {
            type: String,
            "default": '',
            trim: true
        },
        "zip": {
            type: String,
            "default": '',
            trim: true
        }
    },
    "geo": {
        "latitude": {
            type: Number,
            "default": null
        },
        "longitude": {
            type: Number,
            "default": null
        }
    },
    "tools": [toolEnabledSchema],
    "programs": [{
        type: Schema.ObjectId,
        ref: 'Program'
    }],
    "programCustomNames": [customNameSchema],
    "customField": {
        required: {
            type: Boolean,
            "default": false
        },
        enabled: {
            type: Boolean,
            "default": false
        },
        displayName: {
            type: String,
            "default": '',
            trim: true
        }
    }
});

var troop = require('mongoose-troop');
VendorSchema.plugin(troop.merge);

var taggable = require('mongoose-taggable');
VendorSchema.plugin(taggable, {'path':'tags'});
VendorSchema.plugin(taggable, {'path':'industryTags'});

/**
 * Statics
 */
VendorSchema.statics = {

    // this gets called when a vendorId is present in the req.params
    // its a clever way to be able to access req.vendor in the next middlewares
    //
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('programs salesRep vendorRep').exec(cb);
    }
};

/**
 * Runs similar to "after get" callback
 *
 */
VendorSchema.pre('init', function(next, data) {

    // iterate through each program and replace its name with custom name if set
    // @todo not the most effecient
    // attempts to just "merge" the 2 datasets failed, and replaced all the props
    // of programs with custom name
    _.each(data.programs, function(item) {
        var customName = _.where(data.programCustomNames, {
            _id: item._id
        });
        item.displayName = customName.length ? customName[0].displayName : null;
    });

    next();
});

function convertToSlug(Text) {
    return Text
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w\-]+/g, '');
}

VendorSchema.pre('save', function(next) {
    
    
    /**
    * Process tags from dashboard
    * --------------------------------
    * 
    * @note tags are sent as vendorTags which are then saved into vendor.tags
    * @todo refactor with fulltext mondules that @pickle was looking into
    * @note when calling addTag() and removeTag() without a callback, it happens in memory
    *       only and thus will not be refrected in vendor.tags until vendor.save() is complete
    *
    */
    var vendor = this;
    vendor.searchString = '';
    
    // the tags that are present on the vendor model
    var tagTypes = {'tags' : 'vendorTags', 'industryTags' : 'vendorIndustryTags'};
    
    _.each(tagTypes, function(type, path) {

        var vendorTags = [];  // tags that are currently being passed from the vendor
        var newTags = [];
        var removeTags = [];
        
        // create a unified array of current vendor tags
        _.each(vendor[type], function(item) {
            vendorTags.push(item.text);
        });
    
        newTags = _.difference(vendorTags, vendor[path]);
        removeTags = _.difference(vendor[path], vendorTags);
            
        _.each(newTags, function(item) {
            vendor.addTag(path, item, function(err, addedTag) {
                console.log('Added: ' + item);
            });
        });
        
        _.each(removeTags, function(item) {
            vendor.removeTag(path, item, function(err, removedTag) {
                console.log('Removed: ' + item);
            });
        });
        
        /**
        * A nice way to create a search string that we can use on the dealer locator
        * --------------------------------
        * 
        * @todo refactor with fulltext mondules that @pickle was looking into
        *       with a fultext search in place, we could just send tag searches as get queries
        *       and let the server do all the work.
        *
        */
        
        // will be present when updating from dashboard
        if(vendor[type]) {
        
            _.each(vendor[type], function(tag) {
                vendor.searchString += tag.text + ' '; 
            });
            
        // on seed data
        } else {
            _.each(vendor[path], function(tag) {
                vendor.searchString += tag + ' '; 
            });
        }
    });

    /**
    * Standardize tool slugs
    *
    */
    _.each(vendor.tools, function(item) {
        item.slug = convertToSlug(item.name);
    });

    next();
});

VendorSchema.statics = {

    getCurrentReps: function(vendorId, cb) {

        // attempt to get the sales rep, which we save with the quote
        // for easy geting from the database 
        return this.findOne({
            _id: vendorId
        }, function(err, result) {
            if (err) return cb(err);
            if (result && result._id) {
                return cb(null, result);
            } else {
                return cb(new Error(vendorId + ' is Not a valid vendor id'));
            }
        });
    },
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('programs salesRep vendorRep').exec(cb);
    }
};

mongoose.model('Vendor', VendorSchema);