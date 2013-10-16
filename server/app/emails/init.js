/**
* This file is where we define all the emails the system sends. 
* - Each function can be accessed in our app controllers by calling `req.app.emailer.sendFuntionName(req, item)`
* - The function should then handle all logic, formatting, setting variables, etc.
* - Finally the function should call `req.app.emailer.send('path/to-email', locals);`
*   where `path/to-email` is a path to a template folder and `locals` is an object 
*   with to, from, subject and other variables as required by the template
*
*/
var mongoose = require('mongoose'),
    Quote = mongoose.model('Quote'),
    Vendor = mongoose.model('Vendor'),
    Application = mongoose.model('Application'),
    User = mongoose.model('User'),
    moment = require('moment'),
    formatFactory = require('format-number')
    ;

// our formatting for moment.js
var dateTimeFormat = "dddd, MMMM Do YYYY, h:mm:ss a";

// our number formatting function
var format = formatFactory({prefix: '$'});

// fallback addres in cases where salesRep or vendorRep email is not set. 
var fallbackAddress = 'bwalsh@marlinfinance.com';

// function to check for missing resource association, for example
// salesRep or VendorRep, returns false if anything is missing
// @todo this would be more robust if we just got a default sentTo user
//       for the database and sent email to them
var checkForMissingAssociations = function(type, resource) {

    if(!resource.salesRep) {
        // @todo send a default email to system admin!
        console.warn('A %s was generated for a vendor with no Marlin Sales Rep', type);
        resource.salesRep = new User();
    }
   
    if(!resource.salesRep.email) {
        console.warn('A %s was generated for Sales Rep %s who has no email, ', type, resource.salesRep.fullname);
        resource.salesRep.email = fallbackAddress;
    }

    if(!resource.vendorRep) {
        // @todo send a default email to system admin!
        console.warn('A %s was generated for a vendor with no Vendor Rep', type);
        resource.vendorRep = new User();
    }
   
    if(!resource.vendorRep.email) {
        console.warn('A %s was generated for Vendor Rep %s who has no email, ', type, resource.vendorRep.fullname);
        resource.vendorRep.email = fallbackAddress;
    }

    return resource;

};

// ---------------------------------------
// 
// NEW QUOTE
//
// ---------------------------------------
 
// sent to end user   
exports.newQuoteEndUser = function(req, quote) {

    // check for valid email
    // @todo this check is in the email.js module, but it throws an error. Should 
    // we change that and eliminate the check here? 
    if(!quote.company.contactPerson.email) return false;

    // checks for missing emails and replaces with fallbacks to prenvet 
    // notifications for going un heard.
    quote = checkForMissingAssociations('quote', quote);
    
    var vendorName = quote.vendorId.name || '';
     
    var locals = {
        to: {
            email: quote.company.contactPerson.email,
            fullName: quote.company.contactPerson.name
        },
        //from: {
        //    email : quote.salesRep.email,
        //    fullName: quote.salesRep.fullname
        //},
        variables: {
            link: quote.quoterToolLink, // a virtual property of quote model
            fullName: quote.company.contactPerson.name
        },
        subject: 'Your ' + vendorName + ' Quote'          
    };
    
    req.app.emailer.send('quotes/new-endUser', locals);
    
};


// sent to sales rep on new quote
exports.newQuoteSalesRep = function(req, quote) {

    // checks for missing emails and replaces with fallbacks to prenvet 
    // notifications for going un heard.
    quote = checkForMissingAssociations('quote', quote);
     
    var locals = {
        to: {
            email: quote.salesRep.email,
            fullName: quote.salesRep.fullname || "Sales Rep"
        },
        variables: {
            link: quote.dashboardLink, // a virtual property of quote model
            dateTime: moment(quote.created).format(dateTimeFormat),
            
            vendorName: quote.vendorId.name,
            salesRepName: quote.salesRep.fullname || "Sales Rep",
            
            quoteCompany: quote.company.fullLegalBusinessName,
            quoteMethod: quote.company.contactPerson.contactMethod,
            quoteContact: quote.company.contactPerson.name,
            quotePhone: quote.company.contactPerson.phone,
            quoteEmail: quote.company.contactPerson.email,
            quoteAmount: format(quote.totalCost),
            quoteDesc: quote.description
        }            
    };
    
    req.app.emailer.send('quotes/new-salesRep', locals); 
};


// sent to vendor rep on new quote
exports.newQuoteVendorRep = function(req, quote) {

    // checks for missing emails and replaces with fallbacks to prenvet 
    // notifications for going un heard.
    quote = checkForMissingAssociations('quote', quote);
 
    var locals = {
        to: {
            email: quote.vendorRep.email,
            fullName: quote.vendorRep.fullname || "Vendor Rep"
        },
        variables: {
            link: quote.dashboardLink, // a virtual property of quote model
            dateTime: moment(quote.created).format(dateTimeFormat),
            
            vendorName: quote.vendorId.name,
            salesRepName: quote.vendorRep.fullname || "Vendor Rep",
            
            quoteCompany: quote.company.fullLegalBusinessName,
            quoteMethod: quote.company.contactPerson.contactMethod,
            quoteContact: quote.company.contactPerson.name,
            quotePhone: quote.company.contactPerson.phone,
            quoteEmail: quote.company.contactPerson.email,
            quoteAmount: format(quote.totalCost),
            quoteDesc: quote.description
        }            
    };
    
    req.app.emailer.send('quotes/new-vendorRep', locals); 
};


// ---------------------------------------
// 
// NEW APPLICATION
//
// ---------------------------------------

exports.completeAppCredit = function(req, app) {
    
    // make a call to get the vendor
    Application.findOne({_id:app._id}).populate('vendorId salesRep vendorRep').exec(function (err, app) {
          
        // send to the custom credit emaiil address if there is one set
        var sendTo = (app.vendorId.creditEmailAddress && app.vendorId.creditEmailAddress !== '') ?
            app.vendorId.creditEmailAddress : 
            'credit@marlinfinance.com';
     
        // checks for missing emails and replaces with fallbacks to prenvet 
        // notifications for going un heard.
        app = checkForMissingAssociations('app', app);

        var locals = {
            to: {
                email: sendTo,
                fullName: 'Marlin Finance'
            },
            variables: {
                
                appVendorName: app.vendorId.name,
                appSalesRep: app.salesRep.fullname || "Sales Rep",
                appVendorRep: app.vendorRep.fullname || "Vendor Rep",
                
                appTotalCost: app.totalCostDisplay,
                appDesc: app.description,
                
                appCustomFieldName: app.customField.displayName,
                appCustomFieldValue: app.customField.value,
                
                appPaymentTerm: app.payment.term,
                appPayment: app.payment.paymentDisplay,
                appBuyoutOption: app.payment.buyoutOption,
                appBuyoutProgramName: app.payment.programName,
                
                appCompanyName: app.company.fullLegalBusinessName,
                appCompanyAddress1: app.company.businessAddress.address1,
                appCompanyAddress2: app.company.businessAddress.address2,
                appCompanyCity: app.company.businessAddress.city,
                appCompanyState: app.company.businessAddress.state,
                appCompanyZip: app.company.businessAddress.zip,
                
                appCompanySoleProp: app.soleProp,
                appCompanyYearsInBusiness: app.yearsInBusiness,
    
                appContactName: app.company.contactPerson.name,
                appContactEmail: app.company.contactPerson.email,
                appContactPhone: app.company.contactPerson.phone,
                appContactMethod: app.company.contactPerson.contactMethod,
                
                appGuarantorName: app.guarantor.contactPerson.name,
                
                appGuarantorContactEmail: app.guarantor.contactPerson.email,
                appGuarantorContactPhone: app.guarantor.contactPerson.phone,
                appGuarantorContactAddress1: app.guarantor.homeAddress.address1,
                appGuarantorContactAddress2: app.guarantor.homeAddress.address2,
                appGuarantorContactCity: app.guarantor.homeAddress.city,
                appGuarantorContactState: app.guarantor.homeAddress.state,
                appGuarantorContactZip: app.guarantor.homeAddress.zip
            }   
        };
        
        req.app.emailer.send('apps/complete-credit', locals);
    
    });
    
};

// ---------------------------------------
// 
// RESET PASSWORD EMAIL
//
// ---------------------------------------
exports.resetPassword = function(req, app) {
     
    var locals = {
        to: {
            email: req.theUser.email,
            fullName: req.theUser.fullname || req.theUser.name.first || "User"
        },
        variables: {
            fullName: req.theUser.fullname || req.theUser.name.first || "User",
            link: 'http://' + req.headers.host + "/#/login?email=" + req.theUser.email,
            password: req.theUser.password
        }
    };
    
    req.app.emailer.send('account/password-reset', locals);
    
};



// ---------------------------------------
// 
// SEND WELCOME EMAIL TO USER
//
// ---------------------------------------
exports.sendWelcome = function(req, app) {
     
    var locals = {
        to: {
            email: req.theUser.email,
            fullName: req.theUser.fullname || req.theUser.name.first || "User"
        },
        variables: {
            fullName: req.theUser.fullname || req.theUser.name.first || "User",
            link: 'http://' + req.headers.host + "/#/login?email=" + req.theUser.email,
            password: req.theUser.password
        }
    };
        
    req.app.emailer.send('account/welcome-user', locals);
    
};

