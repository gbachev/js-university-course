export function formatPrice(currency, amount) {
    return `${amount.toFixed(2)} ${currency}`;
}

export function createPriceFormatter(currency) {
    return formatPrice.bind(null, currency);
}
