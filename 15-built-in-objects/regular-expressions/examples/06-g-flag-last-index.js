// A regex with g remembers lastIndex, so test() on the same string flips.
const hasDigits = /\d+/g;

console.log(hasDigits.test('Order 42')); // true
console.log(hasDigits.lastIndex); // 8
console.log(hasDigits.test('Order 42')); // false
console.log(hasDigits.lastIndex); // 0
console.log(hasDigits.test('Order 42')); // true
