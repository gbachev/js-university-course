export function getDeliveryLabel(order) {
    const {
        customer: {
            name,
            address: { city, zip },
        },
    } = order;

    return `${name}, ${zip} ${city}`;
}
