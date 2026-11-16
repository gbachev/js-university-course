// Task 3: The bigger discount
// Lecture: Scope and the Scope Chain
//
// discountedPrices(prices, discount) returns a new array with every price reduced by
// discount, a share like 0.1 for 10%. Prices above 100 should get 0.2 instead. Right
// now the expensive prices get the normal discount too: the 0.2 goes into a new
// variable that shadows discount inside the if block and is gone right after it. Fix
// it so prices above 100 get 0.2, and leave the prices array as it is.
//
// Examples:
//   discountedPrices([50, 200], 0.1)   // [45, 160]
//   discountedPrices([100], 0.1)       // [90]
//
// Run the tests: npm test -- 11-scope-and-variables/scope-and-scope-chain

export function discountedPrices(prices, discount) {
    const result = [];

    for (const price of prices) {
        if (price > 100) {
            let discount = 0.2;
        }
        result.push(price - price * discount);
    }

    return result;
}
