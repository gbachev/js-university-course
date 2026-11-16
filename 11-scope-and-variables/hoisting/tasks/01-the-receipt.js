// Task 1: The receipt
// Lecture: Hoisting
//
// receipt(items) returns the lines of a receipt joined with a new line, one line per
// item, like 'Book: 12.50'. Right now it throws a ReferenceError: formatLine is an
// arrow function in a const, and we use it before its declaration, in its temporal
// dead zone. Fix it so the function exists before we use it. An empty list gives an
// empty string.
//
// Examples:
//   receipt([{ name: 'Book', price: 12.5 }, { name: 'Pen', price: 2 }])
//   // 'Book: 12.50\nPen: 2.00'
//
// Run the tests: npm test -- 11-scope-and-variables/hoisting

export function receipt(items) {
    const lines = items.map(formatLine);

    const formatLine = (item) => `${item.name}: ${item.price.toFixed(2)}`;

    return lines.join('\n');
}
