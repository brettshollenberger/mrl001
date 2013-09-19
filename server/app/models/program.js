/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    env = process.env.NODE_ENV || 'development',
    config = require('../../config/config')[env],
    Schema = mongoose.Schema;



// Buyout Options Schema
var buyoutOptionsSchema = new Schema({
    name: {
        type: String,
        "default": ''
    },
    terms: [{}],
    costs: [costsSchema]
});

// Costs Schema
var costsSchema = new Schema({
    min: {
        type: Number,
        "default": ''
    },
    max: {
        type: Number,
        "default": ''
    },
    rates: [{}]
});



/**
 * Program Schema
 */
var ProgramSchema = new Schema({
    "created": {
        type: Date,
        "default": Date.now
    },
    name: {
        type: String,
        "default": ''
    },
    displayName: String,
    rateSheet: {
        termPeriod: {
            type: String,
            "default": ''
        },
        buyoutOptions: [buyoutOptionsSchema]
    }
});

/**
 * Statics
 */
ProgramSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).exec(cb);
    }
};

ProgramSchema.pre('init', function(next, data) {

    //console.log('DATA IS...');
    //console.log(data);

    next();
});

mongoose.model('Program', ProgramSchema);
