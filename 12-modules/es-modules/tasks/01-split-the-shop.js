// Task 1: Split the shop file
// Lecture: ES Modules
//
// This file has grown: it knows prices and adds up the cart. Move the price code into
// 01-split-the-shop/prices.js and the cart code into 01-split-the-shop/cart.js, with
// named exports. prices.js exports VAT_RATE, addVat and formatPrice, and keeps round()
// private. cart.js imports addVat from prices.js and exports cartTotal(items), which
// adds up the prices of the items with VAT. Then this file only re-exports addVat,
// formatPrice and cartTotal, so the rest of the shop keeps importing from here.
// The tests import all three files, and check that round() is not exported.
//
// Examples:
//   addVat(25)                                        // 30
//   formatPrice(30)                                   // '€30.00'
//   cartTotal([{ price: 10 }, { price: 2.5 }])        // 15
//
// Run the tests: npm test -- 12-modules/es-modules

export const VAT_RATE = 0.2;

export function addVat(price) {
    return round(price * (1 + VAT_RATE));
}

function round(amount) {
    return Math.round(amount * 100) / 100;
}

export function formatPrice(amount) {
    return `€${amount.toFixed(2)}`;
}

export function cartTotal(items) {
    let total = 0;
    for (const item of items) {
        total += addVat(item.price);
    }
    return total;
}
