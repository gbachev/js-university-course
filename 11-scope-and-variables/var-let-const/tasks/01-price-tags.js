// Task 1: Price tags
// Lecture: var vs let vs const
//
// createPriceTags(prices) returns an array of functions, one for each price. Calling the
// function at position n returns the tag of the price at position n, like '$12.50'.
// Right now every call throws a TypeError: the loop uses var, so all functions share
// one i, and by the time we call them it is past the end of the array. Fix it so each
// function keeps the i of its own iteration.
//
// Examples:
//   const tags = createPriceTags([12.5, 3, 99.99]);
//   tags[0]()   // '$12.50'
//   tags[2]()   // '$99.99'
//
// Run the tests: npm test -- 11-scope-and-variables/var-let-const

export function createPriceTags(prices) {
    var tags = [];

    for (var i = 0; i < prices.length; i++) {
        tags.push(() => '$' + prices[i].toFixed(2));
    }

    return tags;
}
