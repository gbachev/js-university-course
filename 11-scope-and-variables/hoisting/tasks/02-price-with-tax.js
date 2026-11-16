// Task 2: The price with tax
// Lecture: Hoisting
//
// priceWithTax(price, country) adds the tax of the country to a price: the taxRate at
// the top of the file, 0.2, for every country except 'US', where we add no tax. Right
// now every country except 'US' gets NaN. The var taxRate inside the function is
// hoisted to the top of the function, so it shadows the outer taxRate and is undefined
// when we use it.
// Fix it so the outer rate is used, and 'US' still gets no tax.
//
// Examples:
//   priceWithTax(100, 'BG')   // 120
//   priceWithTax(100, 'US')   // 100
//
// Run the tests: npm test -- 11-scope-and-variables/hoisting

const taxRate = 0.2;

export function priceWithTax(price, country) {
    let total = price + price * taxRate;

    if (country === 'US') {
        var taxRate = 0;
        total = price + price * taxRate;
    }

    return total;
}
