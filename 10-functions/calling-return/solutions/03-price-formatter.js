export function makePriceFormatter(currency) {
    return function(amount) {
        return `${amount.toFixed(2)} ${currency}`;
    };
}
