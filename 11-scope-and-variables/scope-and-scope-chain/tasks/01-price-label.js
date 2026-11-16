// Task 1: The price label
// Lecture: Scope and the Scope Chain
//
// priceLabel(amount, currency) returns a label like '€5.00'. It declares currency and
// then calls formatPrice(), hoping formatPrice() will see that currency. It does not:
// formatPrice() finds its variables where it was written, not where it is called, so
// the call throws a ReferenceError. Fix it: pass the currency to formatPrice() as a
// second parameter. When priceLabel() gets no currency, it uses '€'.
//
// Examples:
//   priceLabel(5)          // '€5.00'
//   priceLabel(12.5, '$')  // '$12.50'
//
// Run the tests: npm test -- 11-scope-and-variables/scope-and-scope-chain

function formatPrice(amount) {
    return currency + amount.toFixed(2);
}

export function priceLabel(amount, currency = '€') {
    return formatPrice(amount);
}
