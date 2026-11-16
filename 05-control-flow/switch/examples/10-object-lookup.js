let country = 'US';
let state = 'CA';

const locations = {
    US: {
        CA: 'California, USA',
        NY: 'New York, USA',
        default: 'Other state in the USA'
    },
    Canada: { default: 'Canada' },
    default: 'Other country'
};

const countryInfo = locations[country];
console.log(countryInfo?.[state] ?? countryInfo?.default ?? locations.default);
// California, USA
