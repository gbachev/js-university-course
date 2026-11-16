export function getCity(user) {
    // The default {} for address lets us look for a city even when there is no address.
    const {
        address: { city = 'Unknown' } = {},
    } = user;

    return city;
}
