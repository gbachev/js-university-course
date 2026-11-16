// Task 2: Lost this
// Lecture: Arrow Functions
//
// The shop object has a discount in percent, and its method discountedPrices(prices)
// should return a new array with every price lowered by that discount. But calling it
// throws a TypeError: the callback we pass to map() is a regular function, map()
// calls it on its own, and inside it this is not shop. Fix it with an arrow function,
// so the callback uses the this of the method. The method must still work for a copy
// of shop with another discount.
//
// Examples:
//   shop.discountedPrices([100, 50])   // [90, 45]
//   shop.discountedPrices([])          // []
//
// Run the tests: npm test -- 10-functions/arrow

export const shop = {
    discount: 10,
    discountedPrices(prices) {
        return prices.map(function(price) {
            return price - (price * this.discount) / 100;
        });
    }
};
