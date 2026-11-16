// Task 1: Promisify the shipping quote
// Lecture: Promises
//
// getShippingQuote(country, callback) is an older function in the error-first style:
// after 300 ms it calls callback(null, price), or callback(error) for a country we do
// not ship to. Write getShippingQuoteAsync(country), which returns a promise: it
// fulfills with the price, or rejects with the same Error that getShippingQuote()
// passed to its callback. Do not change getShippingQuote().
//
// Examples:
//   getShippingQuoteAsync('BG').then((price) => console.log(price)); // 4.99
//   getShippingQuoteAsync('JP').catch((error) => console.log(error.message));
//   // No shipping to JP
//
// Run the tests: npm test -- 17-asynchronous-javascript/promises

const quotes = { BG: 4.99, DE: 7.5, FR: 6.9 };

export function getShippingQuote(country, callback) {
    setTimeout(() => {
        if (!(country in quotes)) {
            callback(new Error(`No shipping to ${country}`));
            return;
        }
        callback(null, quotes[country]);
    }, 300);
}

export function getShippingQuoteAsync(country) {
    // Your code here
}
