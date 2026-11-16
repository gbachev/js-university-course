// require() of an ES module returns its namespace object: the default export is .default.
const cart = require('./02-cart-report/cart.mjs');

function cartReport(prices) {
    return `Total: ${cart.default(prices)} ${cart.currency}`;
}

module.exports = { cartReport };
