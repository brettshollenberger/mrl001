/**
 * Module four all our email sending needs!
 *
 * This compiles templates with external style sheets and varaibles into email ready (inline styles)
 * emails. It then sends them using a transport method of our choice. 
 * 
 * @note config settings are located in config.js and can be set per environment
 * @note our temlates are stored in app/templates/email-slug
 *
 */
var path = require('path')
    , templatesDir, emailTemplates = require('email-templates')
    , nodemailer = require('nodemailer')
    , fs = require('fs')
    , localConfig = {}
    , _ = require('underscore')
    , transport = null
    ;


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
* @example buildAddress({fullname : 'Matt Miller', email: 'matt@gmail.com'}) 
*    // return "Matt Miller <matt@gmail.com>" 
*
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
    
    console.log(formattedAddress);
    
    return formattedAddress;
    
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
            
            // Send email using our default transport
            transport.sendMail({
                
                // basic information
                from: buildAddress(localConfig.sender),
                to: buildAddress(locals.email),
                subject: locals.subject,
                
                // options that creates text automatically? We set it specifically in our template
                // generateTextFromHTML: true,
                
                // will not always be present
                attachments: locals.attachments ? locals.attachments : null,
                headers: locals.headers ? locals.headers : null, 
                
                // text and html are returned from our template builder
                text: text, 
                html: html  
                
            }, function (err, responseStatus) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(responseStatus.message);
                }
            });
        });            

    });
    
};

module.exports = {

    /**
    * Initialize function, needs to be called in our server.js file
    * Creates a transport using environment config settings 
    *
    */
    init: function (app, config) {

        // save the config object within this module
        localConfig = config;

        // create our nodemailer transport object
        // we only need to create this once, and we'll use it to send any emails for this request 
        transport = nodemailer.createTransport(localConfig.type, localConfig.settings);

    },    

    /**
    * Function to send an email using a specified template and set of variables
    * This function should be called anywhere in the app that we need to send an email
    *
    * It does the following: 
    * - Check for a valid slug, ie: there is a template folder that exists
    * - Get the template defaults (subject, variables, etc.) which prevents errors in template rendering
    * - Then render the template 
    * - Check environment, and only log if we are in development or testing
    * - Send email
    *
    */
    send: function(slug, locals) {
        
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





