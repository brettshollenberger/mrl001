exports.seed = function() {
    return data;
};

// dummy data
var data = [{
    "_id" : "525b6ee12260db8c08000006",
    "agreeToTerms" : true,
    "company" : {
        "businessAddress" : {
            "zip" : "19223",
            "state" : "NJ",
            "city" : "Absecon",
            "address2" : "Apartment 3",
            "address1" : "111 Tree Road"
        },
        "contactPerson" : {
            "contactMethod" : "email",
            "phone" : "6093354417",
            "email" : "matt@facultycreative.com",
            "name" : "Matt Miller"
        },
        "fullLegalBusinessName" : "A Great Company"
    },
    "created" : "2013-10-14T04:11:10.640Z",
    "description" : "This is some equiptment",
    "guarantor" : {
        "homeAddress" : {
            "zip" : "19124",
            "state" : "NJ",
            "city" : "Absecon",
            "address2" : "Apartment 3b",
            "address1" : "123 Street Road"
        },
        "contactPerson" : {
            "contactMethod" : "",
            "phone" : "1111111111",
            "email" : "guarantor@gmail.com",
            "name" : "Mr. Guarantor"
        }
    },
    "notes" : [],
    "payment" : {
        "totalCostDisplay" : "$50,000.00",
        "totalCost" : 50000,
        "paymentDisplay" : "$1,575.00",
        "payment" : 1575,
        "rate" : 0.0315,
        "term" : "36 Months"
    },
    "payments" : {
        "Custom Rate Sheet" : [ 
            {
                "rates" : [ 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$4,245.00",
                        "payment" : 4245,
                        "rate" : 0.0849,
                        "term" : "12 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$2,280.00",
                        "payment" : 2280,
                        "rate" : 0.0456,
                        "term" : "24 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$1,575.00",
                        "payment" : 1575,
                        "rate" : 0.0315,
                        "term" : "36 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$1,300.00",
                        "payment" : 1300,
                        "rate" : 0.026,
                        "term" : "48 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$1,120.00",
                        "payment" : 1120,
                        "rate" : 0.0224,
                        "term" : "60 Months"
                    }
                ],
                "termPeriod" : "Months",
                "programName" : "Custom Rate Sheet",
                "name" : "Something custom Fair Market Value"
            }, 
            {
                "rates" : [ 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$4,410.00",
                        "payment" : 4410,
                        "rate" : 0.0882,
                        "term" : "12 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$2,370.00",
                        "payment" : 2370,
                        "rate" : 0.0474,
                        "term" : "24 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$1,670.00",
                        "payment" : 1670,
                        "rate" : 0.0334,
                        "term" : "36 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$1,350.00",
                        "payment" : 1350,
                        "rate" : 0.027,
                        "term" : "48 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$1,150.00",
                        "payment" : 1150,
                        "rate" : 0.023,
                        "term" : "60 Months"
                    }
                ],
                "termPeriod" : "Months",
                "programName" : "Custom Rate Sheet",
                "name" : "Something custom  10% Purchase Option"
            }, 
            {
                "rates" : [ 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$4,775.00",
                        "payment" : 4775,
                        "rate" : 0.0955,
                        "term" : "12 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$2,500.00",
                        "payment" : 2500,
                        "rate" : 0.05,
                        "term" : "24 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$1,740.00",
                        "payment" : 1740,
                        "rate" : 0.0348,
                        "term" : "36 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$1,400.00",
                        "payment" : 1400,
                        "rate" : 0.028,
                        "term" : "48 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$1,185.00",
                        "payment" : 1185,
                        "rate" : 0.0237,
                        "term" : "60 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$1,055.00",
                        "payment" : 1055,
                        "rate" : 0.0211,
                        "term" : "72 Months"
                    }
                ],
                "termPeriod" : "Months",
                "programName" : "Custom Rate Sheet",
                "name" : "Something custom  $1.00 Buyout"
            }
        ],
        "10 Rate Sheet" : [ 
            {
                "rates" : [ 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$4,245.00",
                        "payment" : 4245,
                        "rate" : 0.0849,
                        "term" : "12 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$2,280.00",
                        "payment" : 2280,
                        "rate" : 0.0456,
                        "term" : "24 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$1,575.00",
                        "payment" : 1575,
                        "rate" : 0.0315,
                        "term" : "36 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$1,300.00",
                        "payment" : 1300,
                        "rate" : 0.026,
                        "term" : "48 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$1,120.00",
                        "payment" : 1120,
                        "rate" : 0.0224,
                        "term" : "60 Months"
                    }
                ],
                "termPeriod" : "Months",
                "programName" : "10 Rate Sheet",
                "name" : "Fair Market Value"
            }, 
            {
                "rates" : [ 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$4,410.00",
                        "payment" : 4410,
                        "rate" : 0.0882,
                        "term" : "12 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$2,370.00",
                        "payment" : 2370,
                        "rate" : 0.0474,
                        "term" : "24 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$1,670.00",
                        "payment" : 1670,
                        "rate" : 0.0334,
                        "term" : "36 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$1,350.00",
                        "payment" : 1350,
                        "rate" : 0.027,
                        "term" : "48 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$1,150.00",
                        "payment" : 1150,
                        "rate" : 0.023,
                        "term" : "60 Months"
                    }
                ],
                "termPeriod" : "Months",
                "programName" : "10 Rate Sheet",
                "name" : "10% Purchase Option"
            }, 
            {
                "rates" : [ 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$4,775.00",
                        "payment" : 4775,
                        "rate" : 0.0955,
                        "term" : "12 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$2,500.00",
                        "payment" : 2500,
                        "rate" : 0.05,
                        "term" : "24 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$1,740.00",
                        "payment" : 1740,
                        "rate" : 0.0348,
                        "term" : "36 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$1,400.00",
                        "payment" : 1400,
                        "rate" : 0.028,
                        "term" : "48 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$1,185.00",
                        "payment" : 1185,
                        "rate" : 0.0237,
                        "term" : "60 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$50,000.00",
                        "totalCost" : 50000,
                        "paymentDisplay" : "$1,055.00",
                        "payment" : 1055,
                        "rate" : 0.0211,
                        "term" : "72 Months"
                    }
                ],
                "termPeriod" : "Months",
                "programName" : "10 Rate Sheet",
                "name" : "$1.00 Buyout"
            }
        ]
    },
    "quoteId" : "525b6ede2260db8c08000005",
    "salesRep" : "51e71518ed32080ffc000016",
    "soleProp" : true,
    "status" : "Open",
    "totalCost" : 50000,
    "totalCostDisplay" : "$50,000.00",
    "vendorId" : "51e71518ed32080ffc000023",
    "vendorRep" : "51e71518ed32080ffc000030",
    "yearsInBusiness" : 3
},
{
    "_id" : "525b71e92260db8c08000008",
    "agreeToTerms" : true,
    "company" : {
        "businessAddress" : {
            "zip" : "19223",
            "state" : "NJ",
            "city" : "Absecon",
            "address2" : "Apartment 3",
            "address1" : "111 Tree Road"
        },
        "contactPerson" : {
            "contactMethod" : "email",
            "phone" : "6093354417",
            "email" : "matt@facultycreative.com",
            "name" : "Matt Miller"
        },
        "fullLegalBusinessName" : "Company Name"
    },
    "created" : "2013-10-14T04:24:05.032Z",
    "description" : "This is some equiptment",
    "guarantor" : {
        "homeAddress" : {
            "zip" : "",
            "state" : "false",
            "city" : "",
            "address2" : "",
            "address1" : ""
        },
        "contactPerson" : {
            "contactMethod" : "",
            "phone" : "",
            "email" : "",
            "name" : ""
        }
    },
    "notes" : [],
    "payment" : {
        "totalCostDisplay" : "$89,000.89",
        "totalCost" : 89000.89,
        "paymentDisplay" : "$2,314.02",
        "payment" : 2314.02314,
        "rate" : 0.026,
        "term" : "48 Months"
    },
    "payments" : {
        "10 Rate Sheet" : [ 
            {
                "rates" : [ 
                    {
                        "totalCostDisplay" : "$89,000.89",
                        "totalCost" : 89000.89,
                        "paymentDisplay" : "$7,289.17",
                        "payment" : 7289.172890999999,
                        "rate" : 0.0819,
                        "term" : "12 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$89,000.89",
                        "totalCost" : 89000.89,
                        "paymentDisplay" : "$3,818.14",
                        "payment" : 3818.138181,
                        "rate" : 0.0429,
                        "term" : "24 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$89,000.89",
                        "totalCost" : 89000.89,
                        "paymentDisplay" : "$2,607.73",
                        "payment" : 2607.726077,
                        "rate" : 0.0293,
                        "term" : "36 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$89,000.89",
                        "totalCost" : 89000.89,
                        "paymentDisplay" : "$2,127.12",
                        "payment" : 2127.121271,
                        "rate" : 0.0239,
                        "term" : "48 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$89,000.89",
                        "totalCost" : 89000.89,
                        "paymentDisplay" : "$1,824.52",
                        "payment" : 1824.518245,
                        "rate" : 0.0205,
                        "term" : "60 Months"
                    }
                ],
                "termPeriod" : "Months",
                "programName" : "10 Rate Sheet",
                "name" : "Fair Market Value"
            }, 
            {
                "rates" : [ 
                    {
                        "totalCostDisplay" : "$89,000.89",
                        "totalCost" : 89000.89,
                        "paymentDisplay" : "$7,769.78",
                        "payment" : 7769.777697,
                        "rate" : 0.0873,
                        "term" : "12 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$89,000.89",
                        "totalCost" : 89000.89,
                        "paymentDisplay" : "$3,907.14",
                        "payment" : 3907.139071,
                        "rate" : 0.0439,
                        "term" : "24 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$89,000.89",
                        "totalCost" : 89000.89,
                        "paymentDisplay" : "$2,750.13",
                        "payment" : 2750.127501,
                        "rate" : 0.0309,
                        "term" : "36 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$89,000.89",
                        "totalCost" : 89000.89,
                        "paymentDisplay" : "$2,180.52",
                        "payment" : 2180.521805,
                        "rate" : 0.0245,
                        "term" : "48 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$89,000.89",
                        "totalCost" : 89000.89,
                        "paymentDisplay" : "$1,860.12",
                        "payment" : 1860.118601,
                        "rate" : 0.0209,
                        "term" : "60 Months"
                    }
                ],
                "termPeriod" : "Months",
                "programName" : "10 Rate Sheet",
                "name" : "10% Purchase Option"
            }, 
            {
                "rates" : [ 
                    {
                        "totalCostDisplay" : "$89,000.89",
                        "totalCost" : 89000.89,
                        "paymentDisplay" : "$8,196.98",
                        "payment" : 8196.981969,
                        "rate" : 0.0921,
                        "term" : "12 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$89,000.89",
                        "totalCost" : 89000.89,
                        "paymentDisplay" : "$4,298.74",
                        "payment" : 4298.742987000001,
                        "rate" : 0.0483,
                        "term" : "24 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$89,000.89",
                        "totalCost" : 89000.89,
                        "paymentDisplay" : "$2,919.23",
                        "payment" : 2919.229192,
                        "rate" : 0.0328,
                        "term" : "36 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$89,000.89",
                        "totalCost" : 89000.89,
                        "paymentDisplay" : "$2,314.02",
                        "payment" : 2314.02314,
                        "rate" : 0.026,
                        "term" : "48 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$89,000.89",
                        "totalCost" : 89000.89,
                        "paymentDisplay" : "$1,958.02",
                        "payment" : 1958.01958,
                        "rate" : 0.022,
                        "term" : "60 Months"
                    }, 
                    {
                        "totalCostDisplay" : "$89,000.89",
                        "totalCost" : 89000.89,
                        "paymentDisplay" : "$1,726.62",
                        "payment" : 1726.617266,
                        "rate" : 0.0194,
                        "term" : "72 Months"
                    }
                ],
                "termPeriod" : "Months",
                "programName" : "10 Rate Sheet",
                "name" : "$1.00 Buyout"
            }
        ]
    },
    "quoteId" : "525b71e52260db8c08000007",
    "salesRep" : "51e71518ed32080ffc000015",
    "soleProp" : false,
    "status" : "Open",
    "totalCost" : 89000.89,
    "totalCostDisplay" : "$89,000.89",
    "vendorId" : "51e71518ed32080ffc000026",
    "vendorRep" : null
}];