/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    env = process.env.NODE_ENV || 'development',
    config = require('../../config/config')[env],
    Schema = mongoose.Schema;


/**
 * Sub-Schemas
 */
var noteSchema = new Schema({
    "created": {
        type: Date,
        "default": Date.now
    },
    note: String
});


/**
 * Application Schema
 */
var ApplicationSchema = new Schema({
    "created": {
        type: Date,
        "default": Date.now
    },
    name: {
        type: String,
        "default": '',
        trim: true
    },
    status: {
        type: String,
        "default": 'new',
        trim: true
    },
    quoteId: {
        type: Schema.ObjectId,
        ref: 'Quote'
    },
    vendorId: {
        type: Schema.ObjectId,
        ref: 'Vendor'
    },
    "salesRep": {
        type: Schema.ObjectId,
        ref: 'User'
    },
    "vendorRep": {
        type: Schema.ObjectId,
        ref: 'User'
    },
    vendor: {},
    quote: {},
    leasee: {
        fullLegalBusinessName: {
            type: String,
            "default": '',
            trim: true
        },
        contactPerson: {
            name: {
                type: String,
                "default": '',
                trim: true
            },
            email: {
                type: String,
                "default": '',
                trim: true
            },
            phone: {
                type: String,
                "default": '',
                trim: true
            },
            contactMethod: {
                type: String,
                "default": '',
                trim: true
            }
        },
        businessAddress: {
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
        yearsInBusiness: {
            type: Number
        },
        soleProp: {
            type: Boolean,
            "default": false
        }
    },
    guarantorInfo: {
        name: {
            type: String,
            "default": '',
            trim: true
        },
        email: {
            type: String,
            "default": '',
            trim: true
        },
        phone: {
            type: String,
            "default": '',
            trim: true
        },
        socialSecurityNumber: {
            type: String,
            "default": '',
            trim: true
        },
        homeAddress: {
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
                type: Number
            }
        }
    },
    notes: [noteSchema]
});

/**
 * Statics
 */
ApplicationSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).exec(cb);
    }
};

ApplicationSchema.pre('save', function(next, something) {

    var self = this;

    // attempt to get the sales rep, which we save with the quote
    // for easy geting from the database 
    mongoose.models.Vendor.getCurrentReps(self.vendorId, function(err, result) {
        if (err) {
            next();
        } else {
            self.salesRep = result.salesRep;
            self.vendorRep = result.vendorRep;
            self.vendorId = self.vendorId;
            next();
        }
    });
});


mongoose.model('Application', ApplicationSchema);
