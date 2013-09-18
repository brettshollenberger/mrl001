exports.seed = function() {
    return data;
};

// dummy data
var data = [{
    _id: '51e71518ed32080ffc000017',
    totalCost: 1000,
    status: 'Open',
    vendorId: '51e71518ed32080ffc000023',
    description: 'I need new rockets for my space shuttle booster.',
    company: {
        name: 'NASA',
        address1: '123 Company Lane',
        phone: '556-669-4444',
        city: 'Philadelphia',
        state: 'PA'
    }
},
{
    _id: '51e71518ed32080ffc000018',
    totalCost: 9900,
    status: 'Open',
    vendorId: '51e71518ed32080ffc000024',
    description: 'Manaquins for my art project in the SkyBox',
    company: {
        fullLegalBusinessName: 'Max Fridge',
        contactPerson: {
            name: 'John Doe',
            email: 'john@doe.com',
            phone: '556-669-4444'
        },
        businessAddress: {
            address1: '2424 York Street',
            address2: '',
            city: 'Philadelphia',
            state: 'PA',
            zip: '19125'
        }
    }
},
{
    _id: '51e71518ed32080ffc000019',
    totalCost: 2000,
    status: 'Archived',
    vendorId: '51e71518ed32080ffc000025',
    description: 'Cookies for lunch for everyone!',
    company: {
        fullLegalBusinessName: 'Cookie Company',
        contactPerson: {
            name: 'John Doe Cookie',
            email: 'john@doe.com',
            phone: '556-669-4444'
        },
        businessAddress: {
            address1: '2424 York Street',
            address2: '',
            city: 'Philadelphia',
            state: 'PA',
            zip: '19125'
        }
    }
},
{
    _id: '51e71518ed32080ffc000020',
    totalCost: 28000,
    status: 'Archived',
    vendorId: '51e71518ed32080ffc000025',
    description: 'Security system for my office.',
    company: {
        fullLegalBusinessName: 'Security Company',
        contactPerson: {
            name: 'John Doe Security',
            email: 'john@doe.com',
            phone: '556-669-4444'
        },
        businessAddress: {
            address1: '2424 York Street',
            address2: '',
            city: 'Philadelphia',
            state: 'PA',
            zip: '19125'
        }
    }
}];