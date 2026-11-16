// Task 3: A setting from a file
// Lecture: Type Casting and Coercion
//
// Our app reads its settings from a text file, so a yes or no setting arrives as the
// string 'true' or 'false'. toBoolean(setting) uses Boolean(), and Boolean('false')
// is true, because 'false' is a non-empty string. Fix it: return true only for the
// string 'true', in any letter case ('TRUE', 'True'), and false for anything else,
// including 'false', 'no' and the empty string.
//
// Examples:
//   toBoolean('true')    // true
//   toBoolean('false')   // false
//   toBoolean('TRUE')    // true
//
// Run the tests: npm test -- 06-types/type-casting-and-conversions

export function toBoolean(setting) {
    return Boolean(setting);
}
