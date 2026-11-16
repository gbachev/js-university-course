let country = 'US';
let state = 'CA';

switch (country) {
    case 'US':
        switch (state) {
            case 'CA':
                console.log('California, USA');
                break;
            case 'NY':
                console.log('New York, USA');
                break;
            default:
                console.log('Other state in the USA');
        }
        break;
    case 'Canada':
        console.log('Canada');
        break;
    default:
        console.log('Other country');
}
// California, USA
