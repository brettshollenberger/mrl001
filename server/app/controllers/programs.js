/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Program = mongoose.model('Program'),
    _ = require('underscore');


/**
 * Find program by id
 */
exports.program = function(req, res, next, id) {

    Program.load(id, function(err, program) {
        if (err) return next(err);
        if (!program) return res.failure('Failed to load program ' + id, 404);
        req.program = program;
        next();
    });
};

/**
 * Create a program
 */
exports.create = function(req, res) {

    _.each(req.body.rateSheet.buyoutOptions, function(item) {
        _.each(item.costs, function(cost) {
            cost.min = cost.min.toString();
            cost.max = cost.max.toString();
        }); 
    });
    

    var program = new Program(req.body);

    program.save();
    res.ok(program);
};

/**
 * Update a program
 */
exports.update = function(req, res) {
    
    var program = req.program;
    
    _.each(req.body.rateSheet.buyoutOptions, function(item) {
        _.each(item.costs, function(cost) {
            cost.min = cost.min.toString();
            cost.max = cost.max.toString();
        }); 
    });
    
    program = _.extend(program, req.body);

    program.save(function(err) {
        res.ok(program);
    });
};

/**
 * Delete an program
 */
exports.destroy = function(req, res) {
    var program = req.program;

    program.remove(function(err) {
        if (err) {
            res.failure(err);
        } else {
            res.ok(program);
        }
    });
};

/**
 * Show an program
 */
exports.show = function(req, res) {
    
    _.each(req.program.rateSheet.buyoutOptions, function(item) {
        _.each(item.costs, function(cost) {
            cost.min = cost.min / 100;
            cost.max = cost.max / 100;
        }); 
    });
    
    res.ok(req.program);
};

/**
 * List of Programs
 */
exports.all = function(req, res) {
    Program.find().sort('-created').exec(function(err, programs) {
        if (err) {
            res.faulure(error);
        } else {
            res.ok(programs);
        }
    });
};
