// Task 2: Called too early
// Lecture: Declaring Functions
//
// receiptLine(item, price) builds one line of a receipt, like 'Coffee: 3.50 EUR'. It
// uses a helper, formatPrice, but every call throws a ReferenceError. The helper is a
// function expression, and receiptLine calls it before the line that creates it runs.
// Fix it so receiptLine returns the line. Either move the helper up, or turn it into a
// function declaration, which is hoisted.
//
// Examples:
//   receiptLine('Coffee', 3.5)   // 'Coffee: 3.50 EUR'
//   receiptLine('Book', 12)      // 'Book: 12.00 EUR'
//
// Run the tests: npm test -- 10-functions/declaring

export function receiptLine(item, price) {
    const line = `${item}: ${formatPrice(price)}`;

    const formatPrice = function(amount) {
        return `${amount.toFixed(2)} EUR`;
    };

    return line;
}
