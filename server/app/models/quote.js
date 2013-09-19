/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    env = process.env.NODE_ENV || 'development',
    config = require('../../config/config')[env],
    Schema = mongoose.Schema;


/**
 * Quote Schema
 */
var QuoteSchema = new Schema({
    created: {
        type: Date,
        "default": Date.now
    },
    totalCost: {
        type: Number,
        "default": 0
    },
    status: {
        type: String,
        "default": 'Open',
        trim: true
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
    description: {
        type: String,
        "default": '',
        trim: true
    },
    company: {
        fullLegalBusinessName: {type: String, "default": '', trim: true},
        contactPerson: {
            name: {type: String, "default": '', trim: true},
            email: {type: String, "default": '', trim: true},
            phone: {type: String, "default": '', trim: true},
            contactMethod:{type: String, "default": '', trim: true}
        },
        businessAddress: {
          "address1": {type: String, "default": '', trim: true},
          "address2": {type: String, "default": '', trim: true},
          "city": {type: String, "default": '', trim: true},
          "state": {type: String, "default": '', trim: true},
          "zip": {type: Number}
        }
    },
    customField: {
        displayName: String,
        value: String
    }
});

/*
// the below 4 validations only apply if you are signing up traditionally
QuoteSchema.path('vendorId').validate(function(vendorId) {
    console.log('Validate vendorId');
    return vendorId ? true : false;
}, 'Vendor id must be provided with a new quote.');
*/


QuoteSchema.pre('save', function(next, something) {

    var self = this;

    // attempt to get the sales rep, which we save with the quote
    // for easy geting from the database 
    mongoose.models.Vendor.getCurrentReps(self.vendorId, function(err, result) {
        if (err) {
            next();

            //next(new Error(self.vendorId + ' Not a valid vendor'));
        } else {
            self.salesRep = result.salesRep;
            self.vendorRep = result.vendorRep;
            self.vendorId = self.vendorId;
            next();
        }
    });
});
/**
 * Statics
 */
QuoteSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).exec(cb);
    }
};

mongoose.model('Quote', QuoteSchema);
