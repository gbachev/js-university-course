// Task 1: Zero decimals
// Lecture: Parameters and Arguments
//
// formatPrice(amount, currency, decimals) formats a price, and the last two arguments
// are optional: the currency is 'EUR' and the decimals are 2 when we leave them out.
// It uses the old || pattern for the defaults, so formatPrice(1500, 'JPY', 0) gives
// '1500.00 JPY': 0 is falsy and gets replaced by 2. Fix it with default parameters,
// so 0 decimals stay 0 and a missing or undefined argument still gets its default.
//
// Examples:
//   formatPrice(12.5)              // '12.50 EUR'
//   formatPrice(1500, 'JPY', 0)    // '1500 JPY'
//
// Run the tests: npm test -- 10-functions/params-args

export function formatPrice(amount, currency, decimals) {
    currency = currency || 'EUR';
    decimals = decimals || 2;
    return `${amount.toFixed(decimals)} ${currency}`;
}
