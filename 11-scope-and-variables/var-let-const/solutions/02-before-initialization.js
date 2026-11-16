export function shippingCost(total) {
    const freeFrom = 50;
    const standardCost = 4.99;

    if (total >= freeFrom) {
        return 0;
    }

    return standardCost;
}
