export function getShippingCost(orderTotal) {
    if (orderTotal >= 50) {
        return 0;
    } else {
        return 4.99;
    }
}
