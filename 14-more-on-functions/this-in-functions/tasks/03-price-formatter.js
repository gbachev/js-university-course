// Task 3: One formatter per currency
// Lecture: This in Functions: call(), apply() and bind()
//
// formatPrice(currency, amount) writes a price with two decimals and its currency.
// Our price lists are in one currency each, so we want a function that already knows
// it. Write createPriceFormatter(currency): it returns a new function that takes only
// the amount and returns formatPrice(currency, amount). Use partial application with
// bind; formatPrice does not use this. The returned function must also work as a map
// callback, and two formatters must not share their currency.
//
// Examples:
//   const toEuro = createPriceFormatter('EUR');
//   toEuro(12.5)              // '12.50 EUR'
//   [7, 49].map(toEuro)       // ['7.00 EUR', '49.00 EUR']
//
// Run the tests: npm test -- 14-more-on-functions/this-in-functions

export function formatPrice(currency, amount) {
    return `${amount.toFixed(2)} ${currency}`;
}

export function createPriceFormatter(currency) {
    // Your code here
}
