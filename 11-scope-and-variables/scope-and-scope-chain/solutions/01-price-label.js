function formatPrice(amount, currency) {
    return currency + amount.toFixed(2);
}

export function priceLabel(amount, currency = '€') {
    return formatPrice(amount, currency);
}
