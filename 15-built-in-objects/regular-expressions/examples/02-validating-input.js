// Validation patterns anchored with ^ and $, and the i flag.
const zipCode = /^\d{5}(-\d{4})?$/;

console.log(zipCode.test('90210')); // true
console.log(zipCode.test('90210-1234')); // true
console.log(zipCode.test('9021')); // false

const orderNumber = /^ORD-\d{4}-\d{5}$/i;

console.log(orderNumber.test('ORD-2026-00042')); // true
console.log(orderNumber.test('ord-2026-00042')); // true
console.log(orderNumber.test('My order is ORD-2026-00042')); // false
console.log(/ORD-\d{4}-\d{5}/.test('My order is ORD-2026-00042'));
// true
