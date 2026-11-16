export function hasFreeShipping(orderTotal, threshold) {
    return orderTotal >= threshold;
}
