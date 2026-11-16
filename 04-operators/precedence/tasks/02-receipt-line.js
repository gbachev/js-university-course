// Task 2: The receipt line
// Lecture: Operator Precedence
//
// The last line of our receipts shows the total: the price of the items plus the
// shipping. receiptLine(itemsPrice, shipping) should return a string like
// 'Total: 45 EUR' for items of 40 and shipping of 5, but it returns 'Total: 405 EUR'.
// Every + here has the same precedence and they run from left to right, so the text
// comes first and each number after it is joined to it as text. Fix it with
// parentheses. With free shipping, the total is the price of the items.
//
// Examples:
//   receiptLine(40, 5)   // 'Total: 45 EUR'
//   receiptLine(40, 0)   // 'Total: 40 EUR'
//
// Run the tests: npm test -- 04-operators/precedence

export function receiptLine(itemsPrice, shipping) {
    return 'Total: ' + itemsPrice + shipping + ' EUR';
}
