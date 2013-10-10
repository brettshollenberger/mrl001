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
    User = mongoose.model('User'),
    moment = require('moment'),
    formatFactory = require('format-number')
    ;

// our formatting for moment.js
var dateTimeFormat = "dddd, MMMM Do YYYY, h:mm:ss a";

// our number formatting function
var format = formatFactory({prefix: '$'});

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

    if(!quote.salesRep) {
        // @todo send a default email to system admin!
        console.warn('A quote was generated for a vendor with no Marlin Sales Rep');
        return;
    }
   
    if(!quote.salesRep.email) {
        console.warn('A quote was generated for a salesRep who has no email, ' + quote.salesRep.fullname);
        return;
    }
     
    var locals = {
        to: {
            email: quote.salesRep.email,
            fullName: quote.salesRep.fullname
        },
        variables: {
            link: quote.dashboardLink, // a virtual property of quote model
            dateTime: moment(quote.created).format(dateTimeFormat),
            
            vendorName: quote.vendorId.name,
            salesRepName: quote.salesRep.fullname,
            
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

    if(!quote.vendorRep) {
        // @todo send a default email to system admin!
        console.warn('A quote was generated for a vendor with no vendorRep, ' + quote.vendorId.name);
        return;
    }
   
    if(!quote.vendorRep.email) {
        console.warn('A quote was generated for a vendorRep who has no email, ' + quote.vendorRep.fullname);
        return;
    }
 
    var locals = {
        to: {
            email: quote.vendorRep.email,
            fullName: quote.vendorRep.fullname
        },
        variables: {
            link: quote.dashboardLink, // a virtual property of quote model
            dateTime: moment(quote.created).format(dateTimeFormat),
            
            vendorName: quote.vendorId.name,
            salesRepName: quote.salesRep.fullname,
            
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
     
    var locals = {
        to: {
            email: 'credit@marlinfinance.com',
            fullName: 'Marlin Finance'
        },
        variables: {
            appCompanyName: app.leasee.fullLegalBusinessName,
            appCompanyAddress1: app.leasee.businessAddress.address1,
            appCompanyAddress2: app.leasee.businessAddress.address2,
            appCompanyCity: app.leasee.businessAddress.city,
            appCompanyState: app.leasee.businessAddress.state,
            appCompanyZip: app.leasee.businessAddress.zip,

            appContactName: app.leasee.contactPerson.name,
            appContactEmail: app.leasee.contactPerson.email,
            appContactPhone: app.leasee.contactPerson.phone,
            appContactMethod: app.leasee.contactPerson.contactMethod,
            
            appGuarantorName: app.guarantorInfo.name,
            appGuarantorSocial: app.guarantorInfo.socialSecurityNumber,
            
            appGuarantorContactEmail: app.guarantorInfo.email,
            appGuarantorContactPhone: app.guarantorInfo.phone,
            appGuarantorContactAddress1: app.guarantorInfo.homeAddress.address1,
            appGuarantorContactAddress2: app.guarantorInfo.homeAddress.address2,
            appGuarantorContactCity: app.guarantorInfo.homeAddress.city,
            appGuarantorContactState: app.guarantorInfo.homeAddress.state,
            appGuarantorContactZip: app.guarantorInfo.homeAddress.zip
        }   
    };
    
    req.app.emailer.send('apps/complete-credit', locals);            
    
};