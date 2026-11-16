// Task 2: Add the quantities
// Lecture: Primitive Types
//
// A shop page has two quantity fields, and the values of form fields reach our code
// as strings. addQuantities(first, second) should return the total number of items
// as a number, but for '3' and '4' it returns '34': the + operator joins the two
// strings. Fix it so the result is a number, both for strings like '3' and for
// numbers like 3, and an empty field counts as 0. The unary plus from the Arithmetic
// Operators lecture turns a string into a number.
//
// Examples:
//   addQuantities('3', '4')   // 7
//   addQuantities(2, '5')     // 7
//
// Run the tests: npm test -- 06-types/primitives

export function addQuantities(first, second) {
    return first + second;
}
