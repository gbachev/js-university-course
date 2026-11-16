// Task 2: A valid variable name?
// Lecture: Variables
//
// A code editor wants to warn us about bad variable names. Write
// isValidVariableName(name): it returns true when name follows the naming rules of the
// lecture, and false otherwise. A name has at least one character, uses only the letters
// a-z and A-Z, the digits 0-9, _ and $, and does not start with a digit. It also cannot
// be one of the reserved words in the reservedWords array below.
//
// Examples:
//   isValidVariableName('userName')   // true
//   isValidVariableName('$token')     // true
//   isValidVariableName('1stUser')    // false
//   isValidVariableName('class')      // false
//
// Run the tests: npm test -- 11-scope-and-variables/variables

const reservedWords = ['var', 'let', 'const', 'class', 'function', 'return', 'if', 'for'];
const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const digits = '0123456789';

export function isValidVariableName(name) {
    // Your code here
}
