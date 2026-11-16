// Task 1: Read the age
// Lecture: Type Casting and Coercion
//
// The age field of a sign-up form gives us a string. Write parseAge(text): it casts
// the text to a number with Number() and returns it. When the text is not a number,
// like 'twenty', Number() gives NaN, and then we return null. Watch out: Number('')
// and Number('   ') are 0, not NaN, so an empty field (or one with only spaces)
// also returns null.
//
// Examples:
//   parseAge('34')       // 34
//   parseAge('twenty')   // null
//   parseAge('')         // null
//
// Run the tests: npm test -- 06-types/type-casting-and-conversions

export function parseAge(text) {
    // Your code here
}
