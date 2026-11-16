export function formatPrice(amount, currency = 'EUR', decimals = 2) {
    return `${amount.toFixed(decimals)} ${currency}`;
}
