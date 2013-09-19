exports.seed = function() {
    return data;
};

// dummy data
var data = [{
    "vendorRep" : "51e71518ed32080ffc000030",
    "salesRep" : "51e71518ed32080ffc000016",
    "_id" : "51e71518ed32080ffc000021",
    "quoteId" : "51e71518ed32080ffc000018",
    "vendorId" : "51e71518ed32080ffc000023",
    "quote" : {
        "termInMonths" : 12,
        "description" : "Manaquins for my art project in the SkyBox",
        "totalCost" : 9900
    },
    "notes" : [],
    "guarantorInfo" : {
        "homeAddress" : {
            "zip" : 19125,
            "state" : "PA",
            "city" : "Philadelphia",
            "address2" : "",
            "address1" : "123 Home Lane"
        },
        "socialSecurityNumber" : "111-111-1122",
        "phone" : "556-669-4444",
        "email" : "jane@smith.com",
        "name" : "Jane Smith"
    },
    "leasee" : {
        "yearsInBusiness" : 1,
        "soleProp" : false,
        "businessAddress" : {
            "zip" : 19125,
            "state" : "PA",
            "city" : "Philadelphia",
            "address2" : "",
            "address1" : "2424 York Street"
        },
        "contactPerson" : {
            "contactMethod" : "phone",
            "phone" : "556-669-4444",
            "email" : "john@smith.com",
            "name" : "John Smith"
        },
        "fullLegalBusinessName" : "Smith Medical"
    },
    "status" : "new",
    "name" : "Application 1",
    "__v" : 0
},{
    "salesRep" : "51e71518ed32080ffc000016",
    "_id" : "51e71518ed32080ffc000022",
    "quoteId" : "51e71518ed32080ffc000018",
    "vendorId" : "51e71518ed32080ffc000024",
    "quote" : {
        "termInMonths" : 12,
        "description" : "Manaquins for my art project in the SkyBox",
        "totalCost" : 9900
    },
    "notes" : [],
    "guarantorInfo" : {
        "homeAddress" : {
            "zip" : 19125,
            "state" : "PA",
            "city" : "Philadelphia",
            "address2" : "",
            "address1" : "123 Home Lane"
        },
        "socialSecurityNumber" : "111-111-1122",
        "phone" : "556-669-4444",
        "email" : "jane@doe.com",
        "name" : "John Doe"
    },
    "leasee" : {
        "yearsInBusiness" : 1,
        "soleProp" : false,
        "businessAddress" : {
            "zip" : 19125,
            "state" : "PA",
            "city" : "Philadelphia",
            "address2" : "",
            "address1" : "2424 York Street"
        },
        "contactPerson" : {
            "contactMethod" : "",
            "phone" : "556-669-4444",
            "email" : "john@doe.com",
            "name" : "John Doe"
        },
        "fullLegalBusinessName" : "Max Fridge"
    },
    "status" : "new",
    "name" : "Application 2",
    "__v" : 0
},{
    "__v" : 0,
    "_id" : "5239ed640dd17c29e1000005",
    "guarantorInfo" : {
        "homeAddress" : {
            "state" : "",
            "city" : "",
            "address2" : "",
            "address1" : ""
        },
        "socialSecurityNumber" : "",
        "phone" : "",
        "email" : "",
        "name" : ""
    },
    "leasee" : {
        "soleProp" : false,
        "businessAddress" : {
            "zip" : 19125,
            "state" : "PA",
            "city" : "Philadelphia",
            "address2" : "",
            "address1" : "111 Street Road"
        },
        "contactPerson" : {
            "contactMethod" : "",
            "phone" : "111-111-1111",
            "email" : "bill@gmail.com",
            "name" : "Bill"
        },
        "fullLegalBusinessName" : "A Great Company"
    },
    "name" : "",
    "notes" : [],
    "quote" : {
        "period" : "Month",
        "description" : "Complete overhaul of communication system in our warehouse, including new base stations, headsets, and intercoms.",
        "totalCost" : 40200
    },
    "quoteId" : "5239ecef03c1cb15e1000005",
    "salesRep" : "51e71518ed32080ffc000016",
    "status" : "new",
    "vendorId" : "51e71518ed32080ffc000023",
    "vendorRep" : "51e71518ed32080ffc000030"
},{
    "__v" : 0,
    "_id" : "5239ee330dd17c29e1000007",
    "guarantorInfo" : {
        "homeAddress" : {
            "state" : "",
            "city" : "",
            "address2" : "",
            "address1" : ""
        },
        "socialSecurityNumber" : "",
        "phone" : "111-111-1111",
        "email" : "Guarantor@gmail.com",
        "name" : "Mr. Guarantor"
    },
    "leasee" : {
        "yearsInBusiness" : 2,
        "soleProp" : true,
        "businessAddress" : {
            "zip" : 8220,
            "state" : "AZ",
            "city" : "Absecon",
            "address2" : "",
            "address1" : "111 A Street Address"
        },
        "contactPerson" : {
            "contactMethod" : "",
            "phone" : "111-111-1111",
            "email" : "ben@gmail.com",
            "name" : "Ben"
        },
        "fullLegalBusinessName" : "A Super Company"
    },
    "name" : "",
    "notes" : [],
    "quote" : {
        "period" : "Month",
        "description" : "Upgrade of current security system which includes 20 additional window sensors and a new wireless base station.",
        "totalCost" : 3200
    },
    "quoteId" : "5239ee300dd17c29e1000006",
    "salesRep" : "51e71518ed32080ffc000016",
    "status" : "inProgress",
    "vendorId" : "51e71518ed32080ffc000024"
}];