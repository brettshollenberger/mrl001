/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    env = process.env.NODE_ENV || 'development',
    config = require('../../config/config')[env],
    Schema = mongoose.Schema;
    
var _ = require('lodash');



var customNameSchema = new Schema({
    type: Schema.ObjectId,
    displayName: String
});

var toolEnabledSchema = new Schema({
    "name" : String,
    "active" : Boolean,
    "slug" : String
});

/**
 * Vendor Schema
 */
var VendorSchema = new Schema({
    "created": { type: Date, "default": Date.now },
    "name": {type: String, "default": '', trim: true},
    "contactPerson": {
      "name": {type: String, "default": '', trim: true},
      "email": {type: String, "default": '', trim: true},
      "phone": {type: String, "default": '', trim: true}
    },
    "salesRep" : {
        type: Schema.ObjectId,
        ref: 'User'
    },
    "logo": {
      "original": {type: String, "default": '', trim: true}
    },
    "website": {type: String, "default": '', trim: true},
    "legalTerms": {type: String, "default": '', trim: true},
    "businessPhone": {type: String, "default": '', trim: true},
    "businessAddress": {
      "address1": {type: String, "default": '', trim: true},
      "address2": {type: String, "default": '', trim: true},
      "city": {type: String, "default": '', trim: true},
      "state": {type: String, "default": '', trim: true},
      "zip": {type: String, "default": '', trim: true}
    },
    "geo": {
      "latitude": {type: Number, "default": null},
      "longitude": {type: Number, "default": null}
    },
    "tools": [toolEnabledSchema],
    "programs": [{
        type: Schema.ObjectId,
        ref: 'Program'
    }],
    "programCustomNames" : [customNameSchema],
    "customField": {
        required: {type: Boolean, "default": false},
        enabled: {type: Boolean, "default": false},
        displayName: {type: String, "default": '', trim: true}
    }
});

var troop = require('mongoose-troop');
VendorSchema.plugin(troop.merge);


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
        }).populate('programIds programs salesRep').exec(cb);
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
      var customName = _.where(data.programCustomNames, { _id : item._id });
      item.displayName = customName.length ? customName[0].displayName : null;
  });
    
  next();
});

function convertToSlug(Text)
{
    return Text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w\-]+/g,'')
        ;
}


VendorSchema.pre('save', function(next) {
    
    _.each(this.tools, function(item) {
        item.slug = convertToSlug(item.name);
    });
    
    console.log(this.tools);
    
    next();
});



mongoose.model('Vendor', VendorSchema);


