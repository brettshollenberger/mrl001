exports.seed = function() {
    return data;
}

// dummy data
var data = [{
    id: 1,
    name: {
        first: 'Brian',
        last: 'Walsh'
    },
    fullname: 'Brian Walsh',
    email: 'bwalsh@marlinfinance.com',
    username: 'bwalsh',
    password: 'bwalsh',
    phoneNumber: '111-111-1111',
    avatar: {
        original: 'https://www.filepicker.io/api/file/Lzt97D7RaaMqubCiiRUw'
    },
    status: 'Active',
    groups: [1],
    vendorIds: []
},
{
    id: 2,
    name: {
        first: 'Stu',
        last: 'Sable'
    },
    fullname: 'Stu Sable',
    email: 'ssable@marlinfinance.com',
    username: 'ssable',
    password: 'ssable',
    phoneNumber: '856-505-4280',
    avatar: {
        original: 'https://www.filepicker.io/api/file/5Ur9llgFTkSpz1PlV4g9'
    },
    status: 'Active',
    groups: [2],
    vendorIds: [5]
},
{
    id: 3,
    name: {
        first: 'Joseph',
        last: 'Campbell'
    },
    phoneNumber: '856-505-4117',
    avatar: {
        original: 'https://www.filepicker.io/api/file/sFBGJPRRRYmAhCpIi2Ea'
    }, 
    fullname: 'Joseph Campbell',
    email: 'jcampbell@marlinfinance.com',
    username: 'jcampbell',
    password: 'jcampbell',
    status: 'Active',
    groups: [2],
    vendorIds: [3]
},
{
    id: 4,
    name: {
        first: 'Chris',
        last: 'Barraro'
    },
    avatar: {
        original: 'https://www.filepicker.io/api/file/d3HTcvmERA2zcoXw5YGM'
    }, 
    phoneNumber: ' 856-505-4366',
    fullname: 'Chris Barraro',
    email: 'cbarraro@marlinfinance.com',
    username: 'cbarraro',
    password: 'cbarraro',
    status: 'Active',
    groups: [2],
    vendorIds: []
},
{
    id: 5,
    name: {
        first: 'Brian',
        last: 'McMahon'
    },
    avatar: {
        original: 'https://www.filepicker.io/api/file/xWYKDkrTT4eylsVMmYHj'
    }, 
    phoneNumber: '856-505-4414',
    fullname: 'Brian McMahon',
    email: 'bmcmahon@marlinfinance.com',
    username: 'bmcmahon',
    password: 'bmcmahon',
    status: 'Active',
    groups: [2],
    vendorIds: []
},
{
    id: 6,
    name: {
        first: 'Nicole',
        last: 'Ara'
    },
    phoneNumber: '856-505-4143',
    avatar: {
        original: 'https://www.filepicker.io/api/file/DPcI8ofcTai1AHEbMf2Y'
    }, 
    fullname: 'Nicole Ara',
    email: 'nara@marlinfinance.com',
    username: 'nara',
    password: 'nara',
    status: 'Active',
    groups: [2],
    vendorIds: []
},
{
    id: 7,
    name: {
        first: 'Cherie',
        last: 'Cole'
    },
    phoneNumber: '856-505-4224',
    avatar: {
        original: 'https://www.filepicker.io/api/file/jIiQqlDfRgCppZPdy44k'
    }, 
    fullname: 'Cherie Cole',
    email: 'ccole@marlinfinance.com',
    username: 'ccole',
    password: 'ccole',
    status: 'Active',
    groups: [2],
    vendorIds: []
},
{
    id: 8,
    name: {
        first: 'Joseph',
        last: 'Fortune'
    },
    phoneNumber: '856-505-4430',
    avatar: {
        original: 'https://www.filepicker.io/api/file/jIiQqlDfRgCppZPdy44k'
    }, 
    fullname: ' Joseph Fortune',
    email: 'jfortune@marlinfinance.com',
    username: 'jfortune',
    password: 'jfortune',
    status: 'Active',
    groups: [2],
    vendorIds: [4]
},
{
    id: 9,
    name: {
        first: 'Jennifer',
        last: 'DeLong'
    },
    phoneNumber: '303-963-5832',
    avatar: {
        original: 'https://www.filepicker.io/api/file/kg0Bw0Rvi2J96PZNWpgR'
    }, 
    fullname: 'Jennifer DeLong',
    email: 'jdelong@marlinfinance.com',
    username: 'jdelong',
    password: 'jdelong',
    status: 'Active',
    groups: [2],
    vendorIds: [1,2,3]
}];