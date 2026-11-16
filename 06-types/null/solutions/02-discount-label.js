export function discountLabel(discount) {
    if (discount === null) {
        return 'No discount';
    }
    return discount + '% off';
}
