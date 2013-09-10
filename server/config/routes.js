var async = require('async');
var util = require('util');

module.exports = function(app, passport, auth, user, config, acl, acl2) {
 
    var vendors = require('../app/controllers/vendors');
 
   /*
 //User Routes
    var users = require('../app/controllers/users');
    app.get('/signin', users.signin);
    app.get('/signup', users.signup);
    app.get('/signout', users.signout);

    //Setting up the users api
    app.post('/users', users.create);
    app.post('/users/session', passport.authenticate('local', {
        failureRedirect: '/signin',
        failureFlash: 'Invalid email or password.'
    }), users.session);
    app.get('/users/me', users.me);
    app.get('/users/:userId', users.show);

    //Setting the facebook oauth routes
    app.get('/auth/facebook', passport.authenticate('facebook', {
        scope: ['email', 'user_about_me'],
        failureRedirect: '/signin'
    }), users.signin);
    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/signin'
    }), users.authCallback);

    //Setting the github oauth routes
    app.get('/auth/github', passport.authenticate('github', {
        failureRedirect: '/signin'
    }), users.signin);
    app.get('/auth/github/callback', passport.authenticate('github', {
        failureRedirect: '/signin'
    }), users.authCallback);

    //Setting the twitter oauth routes
    app.get('/auth/twitter', passport.authenticate('twitter', {
        failureRedirect: '/signin'
    }), users.signin);
    app.get('/auth/twitter/callback', passport.authenticate('twitter', {
        failureRedirect: '/signin'
    }), users.authCallback);

    //Setting the google oauth routes
    app.get('/auth/google', passport.authenticate('google', {
        failureRedirect: '/signin',
        scope: 'https://www.google.com/m8/feeds'
    }), users.signin);
    app.get('/auth/google/callback', passport.authenticate('google', {
        failureRedirect: '/signin',
        scope: 'https://www.google.com/m8/feeds'
    }), users.authCallback);

    //Finish with setting up the userId param
    app.param('userId', users.user);
*/


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
    */
    function isUserAllowed(action, resource) {
      return function(req, res, next) {
                
        // add quest role for non-logged in users. 
        if(!req.user || !req.user.role) {
            req.user = {
                role: 'guest'
            };
        }
        
        console.log(util.format('Can user role %s %s %s?', req.user.role, action, resource));
        
        // perform acl query on resource + action
        // responds with 401 and message if user doesn't have permissions
        acl.query(req.user.role, resource, action, function(err, allowed) {
          if(err) throw(err);
          if (allowed) {
             next(); 
          } else {
             return res.failure( util.format('You are not authorized to %s %s', action, resource), 401);
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
    //app.get('/quotes', user.is('logged in'), quotes.all);
    
    /*
app.get('/api/v1/quotes', isUserAllowed('list', 'quotes'), function(req, res, next) {
            
        if(req.user.role === 'admin') {
            quotes.all(req, res, next);
        } else if(req.user.role === 'salesRep') {
            
            // @todo support all for vendor
            quotes.getAllForSalesRep(req, res, next);
        } else {
            res.send('Not found', 404);
        }
        
    });
*/
    
    app.get('/api/v1/quotes', isUserAllowed('list', 'quotes'), quotes.all);
    
    app.post('/api/v1/quotes', isUserAllowed('create', 'quotes'), quotes.create);
    app.get('/api/v1/quotes/:quoteId', isUserAllowed('view', 'quotes'), quotes.show);
    app.put('/api/v1/quotes/:quoteId', isUserAllowed('update', 'quotes'), quotes.update);
    app.del('/api/v1/quotes/:quoteId', isUserAllowed('delete', 'quotes'), quotes.destroy);

    var webshot = require('../app/controllers/webshot')(app, config);
    
    app.get('/api/v1/quotes/:id/download', webshot.getWebshotFromUrl);

    app.param('quoteId', quotes.quote);
    
    
    /**
    * Secure all API endpoints with ACL
    * Here we do our checks to assign roles etc. based on user.id and resource.id
    *
    */
/*
    app.all('/api*', function(req, res, next) {
        
        // if there is no user set, grant guest access
        if(!req.user || !req.user.userId) {
            console.log('Adding guest access');
            req.user = {
                userId: 'guest'
            };
            acl2.addUserRoles(req.user.userId, 'admin', function(err) {}); 
            acl2.whatResources(req.user.userId, function(err, roles) {
                console.log(roles);
            });
            return next();
        }
        
        
        console.log('req.user is:');
        console.log(req.user);
        
        if(req.user.roles.indexOf('admin')) {
            console.log('We have an admin!!!');
        }
     
                
        if(req.user.userId) {
            acl2.addUserRoles(req.user.userId, 'author', function(err) {
                if(err) throw (err);
            });  
        }
        
        
        
        next();
        
    });
*/
    
    
    /**
	* APPLCIATIONS routes
	* -------------------------
	*/
	var applications = require('../app/controllers/applications');
    //app.get('/applications', user.is('admin'), user.is('salesRep'), user.is('vendor'), applications.all);
    
    app.get('/api/v1/applications', isUserAllowed('list', 'applications'), applications.all);
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
    
    // @todo this technically works for now, but needs to be locked down with different show functions per role
    app.get('/api/v1/vendors/:vendorId', isUserAllowed('view', 'vendors'), vendors.show);
    app.put('/api/v1/vendors/:vendorId', isUserAllowed('update', 'vendors'), vendors.update);
    app.del('/api/v1/vendors/:vendorId', isUserAllowed('delete', 'vendors'), vendors.destroy);
    
    // get programs for a vendor
    // @todo replace when we get a proper children setup
    
    app.get('/api/v1/vendors/:vendorId/programs', isUserAllowed('updatePrograms', 'vendors'), vendors.getCurrentVendorPrograms);
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
    
    
    /**
	* DEV / TESTING routes
	* -------------------------
	*/
    /*
app.get('/private', user.can('view all programs'), function(req, res) {
        res.send('OK PRIVATE...!');
    });
*/
   /*
 
    app.get('/fancy',
      // Authenticate using HTTP Basic credentials, with session support disabled.
      passport.authenticate('local'),
       function(req, res){
        res.json({ username: req.user.username, email: req.user.email });
    });
    
    app.get('/out', function(req, res) {
        req.logout();
        res.json({meta: {message: 'success, you are now logged out!'}});
    });
    
*/
    
    
    
    // Catch all for non-existant routes
/*
    app.all('*', function(req, res, next) {
        res.failure('Resource not found', 404);
    });
*/
    
};