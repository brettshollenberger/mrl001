var async = require('async');
var util = require('util');


module.exports = function(app, passport, auth, config, acl) {

    var vendors = require('../app/controllers/vendors');

    /**
     * Middleware authentication using vergin-acl
     * -------------------------
     *
     * Function accepts action and resource params. Uses req.user.role to perform a check
     * assigns quest role if no other roles exist
     *
     * @see config/acl_roles.js for roles
     *
     * @note vergin-acl doesn't support middleware out of the box, so we wrap its check in our own middleware
     *
     * @todo move to middleware... !
     *
     */

    function isUserAllowed(action, resource) {
        return function(req, res, next) {

            // add quest role for non-logged in users. 
            if (!req.user || !req.user.role) {
                req.user = {
                    role: 'guest'
                };
            }

            console.info(util.format('Can user role %s %s %s?', req.user.role, action, resource));

            // perform acl query on resource + action
            // responds with 401 and message if user doesn't have permissions
            acl.query(req.user.role, resource, action, function(err, allowed) {
                if (err) throw (err);
                if (allowed) {
                    next();
                } else {
                    return res.failure(util.format('You are not authorized to %s %s', action, resource), 401);
                }
            });
        };
    }


    /**
     * USERS / AUTH routes
     * -------------------------
     */
    var users = require('../app/controllers/users');
    app.post('/api/v1/auth/login', function(req, res, next) {
        // here we fun a function which calls another function... this gives us access to req, res, and next
        // however there must be a cleaner way to do this
        // @todo refactor
        users.signin(req, res, next, passport);
    });
    app.get('/api/v1/auth/logout', users.signout);
    app.post('/api/v1/auth/logout', users.signout); // makes testing easier with postman


    /**
     * USERS / GENERAL routes
     * -------------------------
     */
    //var users = require('../app/controllers/users');
    app.get('/api/v1/users', isUserAllowed('list', 'users'), users.all);
    app.post('/api/v1/users', isUserAllowed('create', 'users'), users.create);
    // @todo check for vendor, is this their approved sales rep?
    app.get('/api/v1/users/:userId', isUserAllowed('view', 'users'), users.show);
    // sales rep and vendor = edit their own info
    app.put('/api/v1/users/:userId', isUserAllowed('update', 'users'), users.update);
    app.del('/api/v1/users/:userId', isUserAllowed('delete', 'users'), users.destroy);

    // update user role
    app.put('/api/v1/users/:userId/role', isUserAllowed('updateRole', 'users'), users.updateRole);

    // update user password
    app.put('/api/v1/users/:userId/password', isUserAllowed('updatePassword', 'users'), users.updatePassword);

    // get users vendors
    app.get('/api/v1/users/:userId/vendors', isUserAllowed('list', 'vendors'), vendors.listForUser);
    app.get('/api/v1/users/:userId/non_vendors', isUserAllowed('list', 'vendors'), vendors.listNotForUser);

    app.param('userId', users.user);



    /**
     * QUOTES routes
     * -------------------------
     */
    var quotes = require('../app/controllers/quotes');

    app.get('/api/v1/quotes', isUserAllowed('list', 'quotes'), quotes.all);
    app.post('/api/v1/quotes', isUserAllowed('create', 'quotes'), function(req, res, next) {

        console.info('INTERNAL QUOTE API accessed');
        next();
        
    }, quotes.create);
    app.get('/api/v1/quotes/:quoteId', isUserAllowed('view', 'quotes'), quotes.show);
    app.put('/api/v1/quotes/:quoteId', isUserAllowed('update', 'quotes'), quotes.update);
    app.del('/api/v1/quotes/:quoteId', isUserAllowed('delete', 'quotes'), quotes.destroy);
    
    app.post('/public_api/v1/quotes', function(req, res, next) {
        
        console.info('PUBLIC QUOTE API accessed');
        next();
        
    }, quotes.create);

    var webshot = require('../app/controllers/webshot')(app, config);

    // @todo Adjust function when we send webshot to pdf
    // @see https://www.pivotaltracker.com/story/show/57533434
    // @note we should prob be using something like uploadfs to allow our app to send to amazon... 
    // currently we are only storing files locally. 
    app.get('/api/v1/quotes/:id/download', webshot.getWebshotFromUrl);

    app.param('quoteId', quotes.quote);


    /**
     * APPLICATIONS routes
     * -------------------------
     */
    var applications = require('../app/controllers/applications');
    //app.get('/applications', user.is('admin'), user.is('salesRep'), user.is('vendor'), applications.all);

    app.get('/api/v1/applications', isUserAllowed('list', 'applications'), applications.all);
    app.post('/api/v1/applications/find', applications.find);
    app.post('/api/v1/applications', isUserAllowed('create', 'applications'), applications.create);
    app.get('/api/v1/applications/:applicationId', isUserAllowed('view', 'applications'), applications.show);
    app.put('/api/v1/applications/:applicationId', isUserAllowed('update', 'applications'), applications.update);
    app.del('/api/v1/applications/:applicationId', isUserAllowed('delete', 'applications'), applications.destroy);

    app.param('applicationId', applications.application);


    /**
     * VENDORS routes
     * -------------------------
     *
     */

    //app.get('/vendors', user.is('admin'), vendors.all);
    // show all vendors, or just users vendors based on role
    app.get('/api/v1/vendors', isUserAllowed('list', 'vendors'), vendors.all);
    app.post('/api/v1/vendors', isUserAllowed('create', 'vendors'), vendors.create);

    app.get('/api/v1/vendors/tags/:tagType', vendors.getDistinctTags);

    // @todo this technically works for now, but needs to be locked down with different show functions per role
    app.get('/api/v1/vendors/:vendorId', isUserAllowed('view', 'vendors'), vendors.show);
    app.put('/api/v1/vendors/:vendorId', isUserAllowed('update', 'vendors'), vendors.update);
    app.del('/api/v1/vendors/:vendorId', isUserAllowed('delete', 'vendors'), vendors.destroy);

    // get programs for a vendor
    // @todo replace when we get a proper children setup

    app.get('/api/v1/vendors/:vendorId/salesRep', isUserAllowed('view', 'users'), vendors.getSalesRep);
    app.get('/api/v1/vendors/:vendorId/programs', vendors.getCurrentVendorPrograms);
    app.get('/api/v1/vendors/:vendorId/available_programs', isUserAllowed('updatePrograms', 'vendors'), vendors.getAvailableVendorPrograms);

    app.param('vendorId', vendors.vendor);


    /**
     * PROGRAMS routes
     * -------------------------
     *
     * Current Rules
     * - Logged in = view all programs, view single program
     * - Admin = CRUD programs
     *
     * @todo vendors should only be able to view their programs
     *
     */
    var programs = require('../app/controllers/programs');
    app.get('/api/v1/programs', isUserAllowed('list', 'programs'), programs.all);
    app.post('/api/v1/programs', isUserAllowed('create', 'programs'), programs.create);
    app.get('/api/v1/programs/:programId', isUserAllowed('view', 'programs'), programs.show);
    app.put('/api/v1/programs/:programId', isUserAllowed('update', 'programs'), programs.update);
    app.del('/api/v1/programs/:programId', isUserAllowed('delete', 'programs'), programs.destroy);

    app.param('programId', programs.program);


};
