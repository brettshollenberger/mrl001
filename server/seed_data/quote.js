exports.seed = function() {
    return data;
}

// dummy data
var data = [{
    id: 1,
    totalCost: 1000,
    status: 'Open',
    vendorId: 1,
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
    id: 2,
    totalCost: 9900,
    status: 'Open',
    vendorId: 2,
    description: 'Manaquins for my art project in the SkyBox',
    company: {
        name: 'Art Manaquins',
        address1: '123 Company Lane',
        phone: '556-669-4444',
        city: 'Philadelphia',
        state: 'PA'
    }
},
{
    id: 3,
    totalCost: 2000,
    status: 'Archived',
    vendorId: 3,
    description: 'Cookies for lunch for everyone!',
    company: {
        name: 'C is for Cookie',
        address1: '123 Company Lane',
        phone: '556-669-4444',
        city: 'Philadelphia',
        state: 'PA'
    }
},
{
    id: 4,
    totalCost: 28000,
    status: 'Archived',
    vendorId: 3,
    description: 'Security system for my office.',
    company: {
        name: 'NSA',
        address1: '123 Company Lane',
        phone: '556-669-4444',
        city: 'Philadelphia',
        state: 'PA'
    }
}];