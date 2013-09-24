var mongoose = require('mongoose'),
    Quote = mongoose.model('Quote'),
    Vendor = mongoose.model('Vendor'),
    User = mongoose.model('User'),
    moment = require('moment')
    ;

// our formatting for moment.js
var dateTimeFormat = "dddd, MMMM Do YYYY, h:mm:ss a";

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
        console.log('A quote was generated for a vendor with no Marlin Sales Rep');
        return;
    }
   
    if(!quote.salesRep.email) {
        console.log('A quote was generated for a salesRep who has no email, ' + quote.salesRep.fullname);
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
            
            quoteCompany: quote.company.contactPerson.name,
            quoteMethod: quote.company.contactPerson.contactMethod,
            quoteContact: quote.company.contactPerson.name,
            quotePhone: quote.company.contactPerson.phone,
            quoteEmail: quote.company.contactPerson.email,
            quoteAmount: quote.totalCost,
            quoteDesc: quote.description
        }            
    };
    
    req.app.emailer.send('quotes/new-salesRep', locals); 
};


// sent to vendor rep on new quote
exports.newQuoteVendorRep = function(req, quote) {

    if(!quote.vendorRep) {
        // @todo send a default email to system admin!
        console.log('A quote was generated for a vendor with no vendorRep, ' + quote.vendorId.name);
        return;
    }
   
    if(!quote.vendorRep.email) {
        console.log('A quote was generated for a vendorRep who has no email, ' + quote.vendorRep.fullname);
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
            
            quoteCompany: quote.company.contactPerson.name,
            quoteMethod: quote.company.contactPerson.contactMethod,
            quoteContact: quote.company.contactPerson.name,
            quotePhone: quote.company.contactPerson.phone,
            quoteEmail: quote.company.contactPerson.email,
            quoteAmount: quote.totalCost,
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
