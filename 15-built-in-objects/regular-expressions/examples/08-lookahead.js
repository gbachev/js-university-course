// A lookahead checks without consuming characters: does the password contain a digit?
const hasDigit = /^(?=.*\d)/;

console.log(hasDigit.test('summer2026')); // true
console.log(hasDigit.test('summer')); // false
