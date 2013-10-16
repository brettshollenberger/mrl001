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
        required: true
    },
    totalCostDisplay: {
        type: String,
        required: true
    },
    status: {
        type: String,
        "default": 'Open',
        trim: true
    },
    vendorId: {
        type: Schema.ObjectId,
        ref: 'Vendor',
        required: true
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
    payments: {},
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
          "zip": {type: String, "default": '', trim: true}
        }
    },
    customField: {
        displayName: String,
        value: String,
        "default": ""
    }
});


// virtual fields are available anywhere on the server. 
// They are not passes over the API unless explicitly set. 
QuoteSchema.virtual('quoterToolLink').get(function() {
    var protocol = config.secureProtocol || 'https://';
    var host     = 'leaserep.com';
    var port     = ':' + config.port || '';
    return protocol + this.vendorId.slug + '.' + host + port + '/tools/quoter/' + this._id;
});

QuoteSchema.virtual('dashboardLink').get(function() {
    return config.siteUrl + '/dashboard/quotes/' + this._id;
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
            self.vendorId = result._id;
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
