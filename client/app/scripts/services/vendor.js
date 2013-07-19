angular.module('app').factory('vendorService', ['$http', 'userService', function($http, User) {
    
    // dummy data
    var itemList = [
  {
    "id": 1,
    "name": "BearCom Operating LLC",
    "contactPerson": {
      "name": "Jenn Delong",
      "email": "jdelong@marlinfinance.com",
      "phone": "888-479-9111 Ext. 5015"
    },
    "logo": {
      "original": "https://www.filepicker.io/api/file/2v44yfa8TqKt2RAAkpZB"
    },
    "website": "http://www.bearcom.com/",
    "legalTerms": "These are legal terms for vendor 1",
    "businessPhone": "",
    "businessAddress": {
      "address1": "135 N 11th St",
      "address2": "",
      "city": "Philadelphia",
      "state": "PA",
      "zip": "19107"
    },
    "geo": {
      "latitude": 34.06269899999999,
      "longitude": -118.41526299999998
    },
    "locatorEnabled": true,
    "programIds": [
      1,
      3,
      4
    ],
    "programs": [
      {
        "id": 1,
        "displayName": "A Custom Display Name for Program 1",
        "rateSheet": {
          "termPeriod": "Year",
          "buyoutOptions": [
            {
              "name": "$1.00 Buyout Program",
              "terms": [
                {
                  "length": 1
                },
                {
                  "length": 2
                },
                {
                  "length": 3
                }
              ],
              "costs": [
                {
                  "min": 1000,
                  "max": 2000,
                  "rates": [
                    {
                      "rate": 0.96
                    },
                    {
                      "rate": 0.8
                    },
                    {
                      "rate": 0.75
                    }
                  ]
                },
                {
                  "min": 2001,
                  "max": 10000,
                  "rates": [
                    {
                      "rate": 0.96
                    },
                    {
                      "rate": 0.8
                    },
                    {
                      "rate": 0.75
                    }
                  ]
                }
              ]
            },
            {
              "name": "10% Purchase Option",
              "terms": [
                {
                  "length": 1
                },
                {
                  "length": 2
                },
                {
                  "length": 3
                },
                {
                  "length": 4
                }
              ],
              "costs": [
                {
                  "min": 1000,
                  "max": 2000,
                  "rates": [
                    {
                      "rate": 0.96
                    },
                    {
                      "rate": 0.8
                    },
                    {
                      "rate": 0.75
                    },
                    {
                      "rate": 0.75
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    ],
    "salesRep": {
      "id": 9,
      "name": {
        "first": "Jennifer",
        "last": "DeLong"
      },
      "phoneNumber": "303-963-5832",
      "avatar": {
        "original": "https://www.filepicker.io/api/file/kg0Bw0Rvi2J96PZNWpgR"
      },
      "fullname": "Jennifer DeLong",
      "email": "jdelong@marlinfinance.com",
      "username": "jdelong",
      "password": "jdelong",
      "status": "Active",
      "groups": [
        2
      ],
      "vendorIds": [
        1,
        2,
        3
      ]
    }
  },
  {
    "id": 2,
    "name": "Protection One - West",
    "contactPerson": {
      "name": "Jennifer DeLong-Giefer",
      "email": "jdelong@marlinfinance.com",
      "phone": "866-687-3778"
    },
    "logo": {
      "original": "https://www.filepicker.io/api/file/ZxTd0qV0QA2ek9HHSmu3"
    },
    "website": "http://www.protection1.com/",
    "legalTerms": "These are legal terms for vendor 2",
    "businessPhone": "",
    "businessAddress": {
      "address1": "",
      "address2": "",
      "city": "",
      "state": "",
      "zip": ""
    },
    "locatorEnabled": true,
    "programIds": [
      1,
      3,
      4
    ],
    "programs": [
      {
        "id": 1,
        "displayName": "A Custom Display Name for Program 1"
      }
    ],
    "salesRep": {
      "id": 9,
      "name": {
        "first": "Jennifer",
        "last": "DeLong"
      },
      "phoneNumber": "303-963-5832",
      "avatar": {
        "original": "https://www.filepicker.io/api/file/kg0Bw0Rvi2J96PZNWpgR"
      },
      "fullname": "Jennifer DeLong",
      "email": "jdelong@marlinfinance.com",
      "username": "jdelong",
      "password": "jdelong",
      "status": "Active",
      "groups": [
        2
      ],
      "vendorIds": [
        1,
        2,
        3
      ]
    },
    "geo": {
      "latitude": 34.06269899999999,
      "longitude": -118.41526299999998
    }
  },
  {
    "id": 3,
    "name": "Gametime",
    "contactPerson": {
      "name": "Warren Myers",
      "email": "wmyers@playcore.com",
      "phone": ""
    },
    "logo": {
      "original": "https://www.filepicker.io/api/file/EcryKofERBynAuL2txez"
    },
    "website": "http://www.gametime.com",
    "legalTerms": "These are legal terms for vendor 3",
    "businessPhone": "",
    "businessAddress": {
      "address1": "",
      "address2": "",
      "city": "",
      "state": "",
      "zip": ""
    },
    "geo": {
      "latitude": 34.06269899999999,
      "longitude": -118.41526299999998
    },
    "locatorEnabled": true,
    "programIds": [
      1,
      3,
      4
    ],
    "programs": [
      {
        "id": 1,
        "displayName": "A Custom Display Name for Program 1"
      }
    ],
    "salesRep": {
      "id": 3,
      "name": {
        "first": "Joseph",
        "last": "Campbell"
      },
      "phoneNumber": "856-505-4117",
      "avatar": {
        "original": "https://www.filepicker.io/api/file/sFBGJPRRRYmAhCpIi2Ea"
      },
      "fullname": "Joseph Campbell",
      "email": "jcampbell@marlinfinance.com",
      "username": "jcampbell",
      "password": "jcampbell",
      "status": "Active",
      "groups": [
        2
      ],
      "vendorIds": [
        3
      ]
    }
  },
  {
    "id": 4,
    "name": "Union Bank",
    "contactPerson": {
      "name": "Union Bank Financing Consultant",
      "email": "ubapps@marlinfinance.com",
      "phone": "877-307-6756"
    },
    "logo": {
      "original": "https://www.filepicker.io/api/file/yjlOg28UROmPXyK8uadA"
    },
    "website": "https://www.unionbank.com/",
    "legalTerms": "These are legal terms for vendor 3",
    "businessPhone": "",
    "businessAddress": {
      "address1": "",
      "address2": "",
      "city": "",
      "state": "",
      "zip": ""
    },
    "geo": {
      "latitude": 34.06269899999999,
      "longitude": -118.41526299999998
    },
    "locatorEnabled": true,
    "programIds": [
      1,
      3,
      4
    ],
    "programs": [
      {
        "id": 1,
        "displayName": "A Custom Display Name for Program 1"
      }
    ],
    "salesRep": {
      "id": 8,
      "name": {
        "first": "Joseph",
        "last": "Fortune"
      },
      "phoneNumber": "856-505-4430",
      "avatar": {
        "original": "https://www.filepicker.io/api/file/jIiQqlDfRgCppZPdy44k"
      },
      "fullname": " Joseph Fortune",
      "email": "jfortune@marlinfinance.com",
      "username": "jfortune",
      "password": "jfortune",
      "status": "Active",
      "groups": [
        2
      ],
      "vendorIds": [
        4
      ]
    }
  },
  {
    "id": 5,
    "name": "Southeastern Equipment & Supply, Inc.",
    "contactPerson": {
      "name": "Grady Martin",
      "email": "leasing@southeasternequipment.net",
      "phone": "803-454-3656"
    },
    "logo": {
      "original": "https://www.filepicker.io/api/file/nvC3zhiTQoSl01P7K3Br"
    },
    "website": "https://www.unionbank.com/",
    "legalTerms": "These are legal terms for vendor 3",
    "businessPhone": "",
    "businessAddress": {
      "address1": "1919 Old Dunbar Road",
      "address2": "",
      "city": "West Columbia",
      "state": "SC",
      "zip": "29045"
    },
    "programIds": [
      1,
      3,
      4
    ],
    "locatorEnabled": true,
    "programs": [
      {
        "id": 1,
        "displayName": "A Custom Display Name for Program 1",
        "rateSheet": {
          "termPeriod": "Year",
          "buyoutOptions": [
            {
              "name": "$1.00 Buyout Program",
              "terms": [
                {
                  "length": 1
                },
                {
                  "length": 2
                },
                {
                  "length": 3
                }
              ],
              "costs": [
                {
                  "min": 1000,
                  "max": 2000,
                  "rates": [
                    {
                      "rate": 0.96
                    },
                    {
                      "rate": 0.8
                    },
                    {
                      "rate": 0.75
                    }
                  ]
                },
                {
                  "min": 2001,
                  "max": 10000,
                  "rates": [
                    {
                      "rate": 0.96
                    },
                    {
                      "rate": 0.8
                    },
                    {
                      "rate": 0.75
                    }
                  ]
                }
              ]
            },
            {
              "name": "10% Purchase Option",
              "terms": [
                {
                  "length": 1
                },
                {
                  "length": 2
                },
                {
                  "length": 3
                },
                {
                  "length": 4
                }
              ],
              "costs": [
                {
                  "min": 1000,
                  "max": 2000,
                  "rates": [
                    {
                      "rate": 0.96
                    },
                    {
                      "rate": 0.8
                    },
                    {
                      "rate": 0.75
                    },
                    {
                      "rate": 0.75
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    ],
    "salesRep": {
      "id": 2,
      "name": {
        "first": "Stu",
        "last": "Sable"
      },
      "fullname": "Stu Sable",
      "email": "ssable@marlinfinance.com",
      "username": "ssable",
      "password": "ssable",
      "phoneNumber": "856-505-4280",
      "avatar": {
        "original": "https://www.filepicker.io/api/file/5Ur9llgFTkSpz1PlV4g9"
      },
      "status": "Active",
      "groups": [
        2
      ],
      "vendorIds": [
        5
      ]
    },
    "geo": {
      "latitude": 33.9379091,
      "longitude": -81.0891279
    }
  },
  {
    "logo": {
      "original": "https://www.filepicker.io/api/file/AtnUNRiRSQCBrV1eDES8"
    },
    "state": false,
    "name": "Arizona Business Systems Inc",
    "businessAddress": {
      "address1": "16844 E Avenue of the Fountains",
      "address2": "Suite 202",
      "city": "Fountain Hills",
      "state": "AZ",
      "zip": "85268-4202"
    },
    "locatorEnabled": true,
    "contactPerson": {
      "phone": "(480)816-1222"
    },
    "businessPhone": "",
    "id": 6,
    "salesRep": false,
    "website": "http://www.absinc-sw.com/",
    "geo": {
      "latitude": 34.06269899999999,
      "longitude": -118.41526299999998
    }
  },
  {
    "logo": {
      "original": "https://www.filepicker.io/api/file/zhgBhDtsRDuxgsg3Qw49"
    },
    "state": false,
    "name": "Praxair Inc",
    "businessAddress": {
      "address1": "3505 Buck Owens Blvd",
      "city": "Bakersfield",
      "zip": "93308-4919"
    },
    "locatorEnabled": true,
    "contactPerson": {
      "phone": "(661)327-5336",
      "email": "tony_flores@praxair.com"
    },
    "website": "www.praxair.com",
    "id": 7,
    "salesRep": false,
    "geo": {
      "latitude": 35.5217431,
      "longitude": -118.90627940000002
    }
  },
  {
    "logo": {
      "original": "https://www.filepicker.io/api/file/ga99yLAOSnqjeoJVAie7"
    },
    "state": false,
    "name": "EZ 2000 , Inc.",
    "businessAddress": {
      "address1": "1800 Century Park E",
      "address2": "Ste 600",
      "city": "Los Angeles",
      "zip": "90067-1501"
    },
    "locatorEnabled": true,
    "contactPerson": {
      "phone": "(800)273-5033",
      "email": "vpsales@ez2000software.com"
    },
    "website": "www.ez2000software.com",
    "id": 8,
    "salesRep": false,
    "geo": {
      "latitude": 34.06269899999999,
      "longitude": -118.41526299999998
    }
  },
  {
    "logo": {
      "original": "https://www.filepicker.io/api/file/YVnYF7JITLyjN3dWWOaQ"
    },
    "state": false,
    "name": "Meeting One",
    "businessAddress": {
      "address1": "501 S Cherry St Ste 1000",
      "city": "Denver",
      "zip": "80246-1327"
    },
    "contactPerson": {
      "phone": "(303)623-2530",
      "email": "wkim@meetingone.com"
    },
    "website": "www.meetingone.com",
    "id": 9,
    "salesRep": false,
    "locatorEnabled": true,
    "geo": {
      "latitude": 39.6999073,
      "longitude": -104.9330448
    }
  },
  {
    "logo": {
      "original": "https://www.filepicker.io/api/file/m6PTCIGdRsSVyMYimcI2"
    },
    "state": false,
    "name": "capitol office products",
    "businessAddress": {
      "address1": "P O Box 1671",
      "city": "Daytona Beach",
      "zip": "32115-1671"
    },
    "contactPerson": {
      "phone": "(386)238-1177",
      "email": "Jshearer@capofficeproducts.com"
    },
    "website": "www.capofficeproducts.com",
    "id": 10,
    "salesRep": false,
    "locatorEnabled": true,
    "geo": {
      "latitude": 29.22700799999999,
      "longitude": -81.00835589999997
    }
  },
  {
    "logo": {
      "original": "https://www.filepicker.io/api/file/9gaCD06IQ9u9ZaE7YDnS"
    },
    "state": false,
    "name": "Edge Business Systems LLC",
    "businessAddress": {
      "address1": "11660 Alpharetta Hwy",
      "address2": "Ste 710",
      "city": "Roswell",
      "zip": "30076"
    },
    "contactPerson": {
      "phone": "(404)228-4951"
    },
    "id": 11,
    "salesRep": false,
    "locatorEnabled": true,
    "geo": {
      "latitude": 34.0645391,
      "longitude": -84.32442960000003
    }
  },
  {
    "logo": {
      "original": "https://www.filepicker.io/api/file/bokWgO5uTl6gYIpFvkye"
    },
    "state": false,
    "name": "Epay Systems",
    "businessAddress": {
      "address1": "8420 W Bryn Mawr Ave",
      "city": "Chicago",
      "zip": "60631-3479"
    },
    "contactPerson": {
      "phone": "(773)362-4803",
      "email": "desquivel@epaysystems.com"
    },
    "website": "http://www.epaysystems.com",
    "id": 12,
    "salesRep": false,
    "locatorEnabled": true,
    "geo": {
      "latitude": 41.993029,
      "longitude": -87.81075609999999
    }
  },
  {
    "logo": {
      "original": "https://www.filepicker.io/api/file/ehj73VN8RleUCWatx25K"
    },
    "state": false,
    "name": "Central Restaurant Products",
    "businessAddress": {
      "address1": "7750 Georgetown Rd.",
      "city": "Indianapolis",
      "zip": "46268"
    },
    "contactPerson": {
      "phone": "(800)222-5107",
      "email": "jeffn@centralrestaurant.com"
    },
    "website": "http://www.centralrestaurant.com",
    "id": 13,
    "salesRep": false,
    "locatorEnabled": true,
    "geo": {
      "latitude": 39.8998074,
      "longitude": -86.23617439999998
    }
  },
  {
    "logo": {
      "original": "https://www.filepicker.io/api/file/B057fvRamXKKOTr9xmMw"
    },
    "state": false,
    "name": "Clark Security Products-Washington DC.",
    "businessAddress": {
      "address1": "12006 Plum Orchard Dr",
      "city": "Silver Springs",
      "zip": "20904-7857"
    },
    "contactPerson": {
      "phone": "(301)572-1901",
      "email": "tom.hightman@clarksecurity.com"
    },
    "website": "www.clarksecurity.com",
    "id": 14,
    "salesRep": false,
    "locatorEnabled": true,
    "geo": {
      "latitude": 39.0533891,
      "longitude": -76.97582740000001
    }
  },
  {
    "logo": {
      "original": "https://www.filepicker.io/api/file/nkZx82FWQHWObEAvCCkR"
    },
    "state": false,
    "name": "Hendrix Business Systems Inc",
    "businessAddress": {
      "address1": "2040 Ind Cmmerce Dr Ste A",
      "address2": "2040 Independence Commerce Dr",
      "city": "Matthews",
      "zip": "28105"
    },
    "contactPerson": {
      "phone": "(704)574-4800",
      "email": "rhendrix@hendrixbusiness.com"
    },
    "website": "www.hendrixbusiness.com",
    "id": 15,
    "salesRep": false,
    "locatorEnabled": true,
    "geo": {
      "latitude": 35.1105564,
      "longitude": -80.71035319999999
    }
  },
  {
    "logo": {
      "original": "https://www.filepicker.io/api/file/27BUlutGTwmUJ124XGLS"
    },
    "state": false,
    "name": "1st Run Computer Services, Inc.",
    "businessAddress": {
      "address1": "1261 Broadway Rm 508",
      "city": "New York",
      "zip": "10001-3546"
    },
    "contactPerson": {
      "phone": "(212)779-0800",
      "email": "SHawkins@1strun.com"
    },
    "website": "http://www.1strun.net",
    "id": 16,
    "salesRep": false,
    "locatorEnabled": true,
    "geo": {
      "latitude": 40.75368539999999,
      "longitude": -73.9991637
    }
  },
  {
    "logo": {
      "original": "https://www.filepicker.io/api/file/SOgR7MisTbuisebKHdxg"
    },
    "state": false,
    "name": "Autozone, Inc - CORP",
    "businessAddress": {
      "address1": "P O Box 2198",
      "address2": "123 S. Front Street",
      "city": "Memphis",
      "zip": "38101-2198"
    },
    "contactPerson": {
      "phone": "(901)495-6500",
      "email": "tim.mcauliff@autozone.com"
    },
    "website": "www.autozone.com",
    "id": 17,
    "salesRep": false,
    "locatorEnabled": true
  },
  {
    "logo": {
      "original": "https://www.filepicker.io/api/file/2MeQ92VoTZSNA3JwLQf0"
    },
    "state": false,
    "name": "American Typewriter & Office Equipment",
    "businessAddress": {
      "address1": "322 W Nakoma St",
      "city": "San Antonio",
      "zip": "78216-2621"
    },
    "contactPerson": {
      "phone": "(210)349-9026"
    },
    "id": 18,
    "salesRep": false,
    "website": "http://www.americantypewritertx.com/",
    "locatorEnabled": true,
    "geo": {
      "latitude": 29.5516834,
      "longitude": -98.49522280000002
    }
  },
  {
    "logo": {},
    "state": false,
    "name": "Cuda Washington Inc.",
    "businessAddress": {
      "address1": "914 164th St SE Ste 1698",
      "city": "Mill Creek",
      "zip": "98012-6385"
    },
    "contactPerson": {
      "phone": "(866)344-8144"
    },
    "id": 19,
    "salesRep": false,
    "locatorEnabled": true
  },
  {
    "logo": {
      "original": "https://www.filepicker.io/api/file/aiXfeFchQxu6ua1YueUs"
    },
    "state": false,
    "name": "Advanced Mailing & Shipping Tech Inc",
    "businessAddress": {
      "address1": "2346 Market St",
      "city": "Wheeling",
      "zip": "26003"
    },
    "contactPerson": {
      "phone": "(304)232-1755",
      "email": "rthoburn@amasti.com"
    },
    "website": "http://www.amasti.com/index.html",
    "id": 20,
    "salesRep": false,
    "locatorEnabled": true
  },
  {
    "logo": {
      "original": "https://www.filepicker.io/api/file/I9KHZslQoKC2teGmUoSM"
    },
    "state": false,
    "name": "Warren Southwest Refrigeration",
    "businessAddress": {
      "address1": "6423 Cunningham Rd",
      "address2": "713",
      "city": "Houston",
      "zip": "77041-4713"
    },
    "contactPerson": {
      "phone": "(713)869-6221",
      "email": "steve@warrenswrefrigeration.com"
    },
    "website": "http://www.warrensouthwestrefrigera",
    "id": 21,
    "salesRep": false,
    "locatorEnabled": true,
    "geo": {
      "latitude": 29.86738769999999,
      "longitude": -95.59323899999998
    }
  },
  {
    "logo": {
      "original": "https://www.filepicker.io/api/file/SjFpjBZZRU6Tcfz4qrNa"
    },
    "state": false,
    "name": "Air-Care",
    "businessAddress": {
      "address1": "3868 E Post Rd",
      "city": "Las Vegas",
      "zip": "89120-3963"
    },
    "contactPerson": {
      "phone": "(800)322-9919",
      "email": "jared@air-care.com"
    },
    "website": "http://www.air-care.com",
    "id": 22,
    "salesRep": false,
    "locatorEnabled": true,
    "geo": {
      "latitude": 36.0833352,
      "longitude": -115.09997529999998
    }
  },
  {
    "logo": {},
    "state": false,
    "name": "B&G Restaurant Supply Inc.",
    "businessAddress": {
      "address1": "48 Eagle St",
      "city": "Pittsfield",
      "zip": "01201-4715"
    },
    "contactPerson": {
      "phone": "(413)442-0390",
      "email": "bob@bgrestsupply.com"
    },
    "website": "www.bgrestsupply.com",
    "id": 23,
    "salesRep": false,
    "locatorEnabled": true,
    "geo": {
      "latitude": 42.46345030000001,
      "longitude": -73.3001233
    }
  },
  {
    "logo": {
      "original": "https://www.filepicker.io/api/file/JnaftzTAQuST64VnRHXg"
    },
    "state": false,
    "name": "American Dish Service",
    "businessAddress": {
      "address1": "900 Blake St",
      "city": "Edwardsville",
      "zip": "66111-3820"
    },
    "contactPerson": {
      "phone": "(913)422-3700",
      "email": "djohnson@pfgc.com"
    },
    "website": "www.americandish.com",
    "id": 24,
    "salesRep": false,
    "locatorEnabled": true,
    "geo": {
      "latitude": 39.0870168,
      "longitude": -94.8002333
    }
  }
];
    
    //initLocalStore();
    
    // create and expose service methods
    var exports = {};
    
    // get all items
    exports.getAll = function() {
        return itemList;
    };
    
    // get one item by id
    exports.getById = function(id) {
        var theItem = _.find(itemList, function(item) {
            return item.id == id;
        });
        return theItem ? theItem : false;
    };
    
    // update one item by id
    // @todo check for updating the id!
    exports.updateById = function(id, newData) {
        var theId = _.findIndex(itemList, function(item) {
            return item.id == id;
        });
        theList = _.extend(itemList[theId], newData);
        return theList;
    };
    
    // update one item by item 
    // @note we figure out id from item
    exports.update = function(newItem) {
        var theIndex = _.findIndex(itemList, function(item) {
            return item.id == newItem.id;
        });
        theList = _.extend(itemList[theIndex], newItem);
        return theList;
    };
    
    // add a new item
    exports.add = function(item) {
        item.id = itemList.length + 1;
        itemList.push(item);
        return item;
    };
    
    // remove item by item
    exports.remove = function(item) {
        itemList.splice(itemList.indexOf(item), 1);
        return item;
    };
    
    /**
    * Add a vendor to a program using the id of each
    * @param int vendorId ID of the vendor
    * @param int programId ID of the program
    * @return array Updated array of programIds associated with vendor
    */
    exports.addProgramToVendor = function(programId, vendorId) {
        
        // gets array key for this vendor
        var theId = _.findIndex(itemList, function(item) {
            return item.id == vendorId;
        });
        
        console.log(itemList[theId].programIds);
        
        // just in case this vendor has no ids array yet! 
        if(!itemList[theId].programIds) itemList[theId].programIds = [];
        
        itemList[theId].programIds.push(programId);
        
        return itemList[theId].programIds;
    };
    
    
    /**
    * Removes vendor from program the id of each
    *
    * @param int vendorId ID of the vendor
    * @param int programId ID of the program
    * @return array Updated array of programs for the vendor
    */
    exports.removeProgramFromVendor = function(programId, vendorId) {
        // gets array key for this vendor
        var theId = _.findIndex(itemList, function(item) {
            return item.id == vendorId;
        });
        
        itemList[theId].programIds = _.reject(itemList[theId].programIds, function(item) {
            return programId == item;
        });
        
        console.log(itemList[theId].programIds);
        
        //console.log(itemList[theId]);
        
        return itemList[theId].programIds;
    };
    
    
    /**
    * Reduces the itemList to those where ID is in values array
    * 
    * If ID exists multiple times, will only return item one time 
    *
    */
    exports.getManyWhereIn = function(values) {
        var reducedList = _.filter(itemList, function(item) {
            return _.contains(values, item.id);
        });
        return reducedList;
    };
    
    
    exports.getAllWithoutSalesReps = function() {
        var reducedList = _.filter(itemList, function(item) {
            return !User.getOneWhereIn('vendorIds', item.id);
        });
        return reducedList;
    };
    
    
    return exports;
    
}]);