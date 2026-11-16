// Task 3: The shop namespace
// Lecture: IIFE (Immediately Invoked Function Expressions)
//
// Before modules, a script added its functions to one shared namespace object. The
// IIFE below gets our Shop namespace as ns. Inside it, keep a private VAT rate of 0.2
// and add one function to the namespace: ns.priceWithVat(price) returns the price
// with the VAT added. The rate must not end up on Shop, and the IIFE must not replace
// the Shop object: other code already holds it.
//
// Examples:
//   Shop.priceWithVat(100)    // 120
//   Shop.priceWithVat(0)      // 0
//   Shop.vatRate              // undefined
//
// Run the tests: npm test -- 14-more-on-functions/iife

export const Shop = { name: 'Corner Books' };

(function (ns) {
    // Your code here
})(Shop);
