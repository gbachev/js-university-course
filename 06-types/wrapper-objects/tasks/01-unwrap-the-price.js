// Task 1: Unwrap the price
// Lecture: Boxing and Wrapper Objects
//
// An old part of our shop gives us prices as Number wrapper objects, like
// new Number(19.99), while the new part gives us plain numbers. Write unwrap(value):
// it returns the primitive value in both cases, so unwrap(new Number(19.99)) returns
// the number 19.99, and unwrap(19.99) returns 19.99 as it is. It works for String
// wrapper objects too. One method call covers all of them.
//
// Examples:
//   unwrap(new Number(19.99))   // 19.99
//   unwrap(5)                   // 5
//   unwrap(new String('EUR'))   // 'EUR'
//
// Run the tests: npm test -- 06-types/wrapper-objects

export function unwrap(value) {
    // Your code here
}
