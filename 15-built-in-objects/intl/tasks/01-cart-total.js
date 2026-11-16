// Task 1: The cart total
// Lecture: The Intl API
//
// The checkout page shows the cart total in the customer's locale and currency.
// Write formatCartTotal(items, currency, locale). Each item has a price and a
// quantity. Add up price * quantity for every item and return the total formatted
// with Intl.NumberFormat as a currency, with two decimals. An empty cart shows a
// total of 0. The tests replace the non-breaking spaces in our output with ordinary
// ones before they compare, so we do not have to type them.
//
// Examples:
//   const items = [{ price: 4.5, quantity: 2 }, { price: 1225.5, quantity: 1 }];
//   formatCartTotal(items, 'EUR', 'en-US')   // '€1,234.50'
//   formatCartTotal(items, 'EUR', 'de-DE')   // '1.234,50 €'
//
// Run the tests: npm test -- 15-built-in-objects/intl

export function formatCartTotal(items, currency, locale) {
    // Your code here
}
