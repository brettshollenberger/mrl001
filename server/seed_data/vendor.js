var mongo = require('mongodb');
var BSON = mongo.BSONPure;
    
exports.seed = function() {
    return data;
};

var data = [{
	_id: new BSON.ObjectID('51e71518ed32080ffc000001'),
    name: 'BearCom Operating LLC',
    contactPerson: {
        name: 'Jenn Delong',
        email: 'jdelong@marlinfinance.com',
        phone: '888-479-9111 Ext. 5015'
    },
    logo: {
        original: 'https://www.filepicker.io/api/file/2v44yfa8TqKt2RAAkpZB'  
    },
    website: 'http://www.bearcom.com/',
    legalTerms: 'These are legal terms for vendor 1',
    businessPhone: '',
    businessAddress: {
        address1: '4009 Distribution Dr.',
        address2: 'Bldg 200',
        city: 'Garland',
        state: 'TX',
        zip: '75041'
    },
    programIds: ['51e71518ed32080ffc000006', '51e71518ed32080ffc000007'],
    //salesRep: User.getOneWhereIn('vendorIds', 1),
    programs: [{
        id: 1,
        displayName: 'A Custom Display Name for Program 1'
    }]
},
{
	_id: new BSON.ObjectID('51e71518ed32080ffc000002'),
    name: 'Protection One - West',
    contactPerson: {
        name: 'Jennifer DeLong-Giefer',
        email: 'jdelong@marlinfinance.com',
        phone: '866-687-3778'
    },
    logo: {
        original: 'https://www.filepicker.io/api/file/ZxTd0qV0QA2ek9HHSmu3'  
    },
    website: 'http://www.protection1.com/',
    legalTerms: 'These are legal terms for vendor 2',
    businessPhone: '',
    businessAddress: {
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
    },
    programIds: ['51e71518ed32080ffc000006', '51e71518ed32080ffc000007'],
    //salesRep: User.getOneWhereIn('vendorIds', 1),
    programs: [{
        id: 1,
        displayName: 'A Custom Display Name for Program 1'
    }]
},
{
	_id: new BSON.ObjectID('51e71518ed32080ffc000003'),
    name: 'Gametime',
    contactPerson: {
        name: 'Warren Myers',
        email: 'wmyers@playcore.com',
        phone: ''
    },
    logo: {
        original: 'https://www.filepicker.io/api/file/EcryKofERBynAuL2txez'
    },
    website: 'http://www.gametime.com',
    legalTerms: 'These are legal terms for vendor 3',
    businessPhone: '',
    businessAddress: {
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
    },
    programIds: ['51e71518ed32080ffc000006', '51e71518ed32080ffc000007'],
    //salesRep: User.getOneWhereIn('vendorIds', 1),
    programs: [{
        id: 1,
        displayName: 'A Custom Display Name for Program 1'
    }]
},
{
	_id: new BSON.ObjectID('51e71518ed32080ffc000004'),
    name: 'Union Bank',
    contactPerson: {
        name: 'Union Bank Financing Consultant',
        email: 'ubapps@marlinfinance.com',
        phone: '877-307-6756'
    },
    logo: {
        original: 'https://www.filepicker.io/api/file/yjlOg28UROmPXyK8uadA'  
    },
    website: 'https://www.unionbank.com/',
    legalTerms: 'These are legal terms for vendor 3',
    businessPhone: '',
    businessAddress: {
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
    },
    programIds: ['51e71518ed32080ffc000006', '51e71518ed32080ffc000007'],
    //salesRep: User.getOneWhereIn('vendorIds', 1),
    programs: [{
        id: 1,
        displayName: 'A Custom Display Name for Program 1'
    }]
},
{
	_id: new BSON.ObjectID('51e71518ed32080ffc000005'),
    name: 'Southeastern Equipment & Supply, Inc.',
    contactPerson: {
        name: 'Grady Martin',
        email: 'leasing@southeasternequipment.net',
        phone: '803-454-3656'
    },
    logo: {
        original: 'https://www.filepicker.io/api/file/nvC3zhiTQoSl01P7K3Br'  
    },
    website: 'https://www.unionbank.com/',
    legalTerms: 'These are legal terms for vendor 3',
    businessPhone: '',
    businessAddress: {
        address1: '1919 Old Dunbar Road',
        address2: '',
        city: 'West Columbia',
        state: 'SC',
        zip: '29045'
    },
    programIds: ['51e71518ed32080ffc000006', '51e71518ed32080ffc000007'],
    //salesRep: User.getOneWhereIn('vendorIds', 1),
    programs: [{
        id: 1,
        displayName: 'A Custom Display Name for Program 1'
    }]
}];