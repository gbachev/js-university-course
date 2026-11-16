export function isSameAddress(shipping, billing) {
    // === compares references, so we compare the values one by one.
    return (
        shipping.street === billing.street &&
        shipping.city === billing.city &&
        shipping.zip === billing.zip
    );
}
