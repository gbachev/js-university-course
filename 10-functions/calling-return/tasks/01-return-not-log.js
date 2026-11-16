// Task 1: Return, do not log
// Lecture: Calling Functions and Return Values
//
// formatPrice(amount) should give back the amount with 2 decimals and ' EUR' after
// it, so the rest of our shop can put the text on a product card. Right now it only
// prints the text to the console, and whoever calls it gets undefined. Fix it so it
// returns the text and prints nothing.
//
// Examples:
//   formatPrice(12.5)   // '12.50 EUR'
//   formatPrice(3)      // '3.00 EUR'
//
// Run the tests: npm test -- 10-functions/calling-return

export function formatPrice(amount) {
    console.log(`${amount.toFixed(2)} EUR`);
}
