/**
 * Module four all our email sending needs!
 *
 * ----------
 *
 * IMPORTANT USAGE NOTES
 *
 * @note MAILCATCHER
 *       you should have http://mailcatcher.me/ installed and running for development
 *       this will use mailcatcher to send emails, which you can view at http://127.0.0.1:1080/
 *       Emails will also be logged in the console
 *
 * @note TEST environment
 *       Email addresses are overridden and sent to emails define in `config.email.testEmails`
 *       Email is sent using Mandrill to simulate production as closely as possible 
 *
 * @note SET TEST ENV
 *       To set test env for your app (or any other env or process variable), run `export NODE_ENV=test`
 *       in terminal then run `grunt server` to start your app.
 *
 * ----------
 *
 * This module compiles templates with external style sheets and varaibles into email ready (inline styles)
 * emails. It then sends them using a transport method of our choice.
 *
 * It utilizies the 'email-templates' module from NPM to render nice html emails.
 * 
 * @note config settings are located in config.js and can be set per environment
 * @note our temlates are stored in app/templates/email-slug
 *
 * @todo support non-html emails, for simple stuff? 
 * 
 * @todo this module supports sending an email to multiple people, with the following limitations:
 * - Variables must be the same for all users
 * - to: should be comma separated list of addresses
 * - The template library does support variables on a per email basis, 
 *   but that specific example was not integrated.( However we could get around this by 
 *   just calling req.app.emailer.send('slug', locals) within a foreEach loop.)
 *
 */
var path = require('path')
    , templatesDir, emailTemplates = require('email-templates')
    , nodemailer = require('nodemailer')
    , fs = require('fs')
    , localConfig = {}
    , _ = require('underscore')
    , transport = null
    , preventSend = false
    , env = process.env.NODE_ENV || 'development'
    ;



module.exports = {

    /**
    * Initialize function, needs to be called in our server.js file
    * Creates a transport using environment config settings 
    *
    */
    init: function (app, config) {

        if(!app || !config) {
            throw new Error("Failed to initalize emailer");
        }

        // save the config object within this module
        localConfig = config;

        // create our nodemailer transport object
        // we only need to create this once, and we'll use it to send any emails for this request 
        transport = nodemailer.createTransport(localConfig.type, localConfig.settings);
        
        // don't send real emails in development or testing
        if(env !== 'production') {
            preventSend = true;
        }
        
        // makes app.emailer accessiable throughout app
        app.emailer = this;

    },    

    /**
    * Function to send an email using a specified template and set of variables
    * This function should be called anywhere in the app that we need to send an email
    *
    * It does the following: 
    * - Check for a valid slug, ie: there is a template folder that exists
    * - Get the template defaults (subject, variables, etc.) which prevents errors in template rendering
    * - Then render the template
    * - validate attachments, if any, match the required format 
    * - Check environment, and only log if we are in development or testing
    * - Send email
    *
    * @note that currently this function doesn't accept callbacks, so the controller won't know if it was
    *       completed successfully. This also means we don't need to wait for the email to send to move on.
    *
    */
    send: function(slug, locals) {
        
        if(!slug || !locals) throw Error('Slug and locals are required');
        
        // Get config path
        var configPath = path.join(localConfig.templatesDir, slug, 'config.js');
        
        // Get defaults from config path
        var defaults = require(configPath).defaults;
        if(!defaults) throw Error('The config.js file for this email is missing or invalid.');

        // extend local options with template defaults
        // this ensure all variables are set, and prevents template rendering error or 
        // strange emails with broken syntax.
        locals = _.extend(defaults, locals);
        
        // attempt to send the email
        trySend(slug, locals);
        
    }
    
};


/**
* Generate an email address formatted name from a name object or a string
*
* Ideally email addresses use the pattern: "John Doe <john@doe.com>", 
* which allows email clients to register a display name and email address
* 
* You can pass this function a plain email, which it will return
* Or you can pass an object and it will assemlble the proper "name <email>" formatting
*
* Expected object should be this:
*
* objOrString: {
*     fullName: 'First Last',
*     email: 'johndoe@gmail.com'
* }
*
* @example buildAddress(matt@gmail.com) 
*    // return "matt@gmail.com"
*
* @example buildAddress({fullName : 'Matt Miller'}) 
*    // throw error, email is missing!
*
* @example buildAddress({fullName : 'Matt Miller', email: 'matt@gmail.com'}) 
*    // return "Matt Miller <matt@gmail.com>" 
*
*
* @todo convert our variable to lowercase, since thats much easier to remember
*
*/
var buildAddress = function(objOrString) {
    
    var formattedAddress;  
    
    if(!objOrString) { 
        throw Error('You must provide at least an email string');
    }
     
    if(typeof objOrString === 'string') {
        formattedAddress = objOrString; 
        return formattedAddress;
    } 
        
    if(typeof objOrString !== 'string' && !objOrString.email) { 
        throw Error('You must provide a valid email');
    }
    
    formattedAddress = objOrString.email;
    
    if(objOrString.fullName) {
        formattedAddress = objOrString.fullName + " <" + formattedAddress + ">";
    }
    
    return formattedAddress;
    
};


/**
* Function to check if an object matches an object format. 
* Returns false or the obj if match. 
*
*/
var matchFormat = function(format, obj) {
    
    var match = true;
    var formatted = {};
    
    _.each(format, function(value, key) {
        if(!obj[key]) {
            match = false;
            //console.warn(key + ' doesn\'t exist in obj');
            return;
        } else {
            //console.log(key + ' = ' + value);
            formatted[key] = obj[key];
        }
    });
    
    if(!match) {
        
        console.warn('Pattern didn\'t match format. Please try again with:');
        console.warn(format);
        
        fs.exists(obj, function(exists) {
            if(exists) {
                console.log('Although not in the proper format, this is a real file. We can try to fudge it. We won\'t be doing it now though.');
            } else {
                console.log('No hope :(');
                return;
            }
        });
        
    } else {
        return formatted;
    }
    
};


/**
* Validates format for attachments. Currenly only validates File Stream
* @todo support Binary Buffer and String if needed
* 
* If you only send an array of filePaths, we'll be nice enought to generate the proper 
* structure for you :)
*
*/ 
var validateAttachments = function(attachments) {
    
    if(typeof attachments !== 'object' && typeof attachments !== 'array') {
        throw Error('Attachment should be an array (For multiple) or an object');
    }
    
    var format = {
        fileName: null,     // file name
        filePath: null,     // path to file
        cid: null           // should be as unique as possible
    };
    
    _.each(attachments, function(attachment) {
        attachment = matchFormat(format, attachment);
    });
    
    return attachments;
    
};


/**
* Logging function for delopment and testing mode
*
*/
var logEmail = function(options) {
    console.info('-----------------------------------');
    console.info('TESTING, TESTING, read all about it');
    console.info('-----------------------------------');
    console.info(options);
    console.info('-----------------------------------');
};

/**
* Function compiles template, and sends email to a single user
*
*
*/ 
var trySend = function(templateSlug, locals) {
    
    /**
    * Initialize the email template generator
    *
    */
    emailTemplates(localConfig.templatesDir, function (err, template) {

        if(err) { 
            console.error(err);
        }
        
        // Send a single email
        template(templateSlug, locals.variables, function (err, html, text) {
            
            if(err) { 
                console.error(err);
            }
            
            // Assemble our final options, we do this here so we can easily log or email them.
            var finalOptions = {
                
                // basic information
                from: buildAddress(localConfig.from),
                to: buildAddress(locals.to),
                subject: locals.subject,
                
                // options that creates text automatically? We set it specifically in our template
                // generateTextFromHTML: true,
                
                // will not always be present
                attachments: locals.attachments ? validateAttachments(locals.attachments) : null,
                headers: locals.headers ? locals.headers : null, 
                
                // text and html are returned from our template builder
                text: text, 
                html: html  
                
            };
            
            /**
            * PreventSend will be flagged true if we are in development || testing mode. 
            * This prevents us from sending un wanted emails to random people. 
            */
            if(preventSend) {
                
                logEmail(finalOptions);
                
            } else {
               // Send email using our default transport
                transport.sendMail(finalOptions, function (err, responseStatus) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(responseStatus.message);
                    }
                }); 
            }
            
            
        });            

    });
    
};