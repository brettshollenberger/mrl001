exports.seed = function() {
    return data;
};

var data = [{
id: 1,
name: 'Program numero uno, a Yearly plan',
rateSheet: {
    termPeriod: 'Year',
    buyoutOptions: [
            { 
            name: '$1.00 Buyout Program', 
            terms: [{length: 1}, {length: 2}, {length: 3}],
            costs: [
                {
                    min: 1000,
                    max: 2000,
                    rates: [{rate: 0.96}, {rate: 0.80}, {rate: 0.75}]
                },
                {
                    min: 2001,
                    max: 10000,
                    rates: [{rate: 0.96}, {rate: 0.80}, {rate: 0.75}]
                }
                ]
            },
            { 
            name: '10% Purchase Option', 
            terms: [{length: 1}, {length: 2}, {length: 3}, {length: 4}],
            costs: [
                {
                    min: 1000,
                    max: 2000,
                    rates: [{rate: 0.96}, {rate: 0.80}, {rate: 0.75}, {rate: 0.75}]
                    
                }]
            }]
    }
}];