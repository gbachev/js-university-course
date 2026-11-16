// Task 2: A report from an ES module
// Lecture: CommonJS
//
// An old CommonJS script prints the cart report of the shop. It loads the cart module,
// 02-cart-report/cart.mjs, an ES module with a default export cartTotal and a named
// export currency. cartReport(prices) should return a line like 'Total: 12.5 EUR',
// but it throws TypeError: cartTotal is not a function. Fix the way this file takes
// the default export from what require() returns. Leave cart.mjs as it is. An empty
// cart is 'Total: 0 EUR'.
//
// Examples:
//   cartReport([10, 2.5])   // 'Total: 12.5 EUR'
//   cartReport([])          // 'Total: 0 EUR'
//
// Run the tests: npm test -- 12-modules/commonjs

const { cartTotal, currency } = require('./02-cart-report/cart.mjs');

function cartReport(prices) {
    return `Total: ${cartTotal(prices)} ${currency}`;
}

module.exports = { cartReport };
