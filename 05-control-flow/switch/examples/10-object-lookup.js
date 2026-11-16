let country = 'US';
let state = 'CA';

const locations = {
    US: {
        CA: 'California, USA',
        NY: 'New York, USA',
        default: 'Other state in the USA'
    },
    Canada: 'Canada',
    default: 'Other country'
};

console.log(locations[country]?.[state] ?? locations[country] ?? locations.default);
// California, USA
