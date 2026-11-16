export function receiptLine(item, price) {
    // The helper is created first, so it exists when we call it.
    const formatPrice = function(amount) {
        return `${amount.toFixed(2)} EUR`;
    };

    return `${item}: ${formatPrice(price)}`;
}
