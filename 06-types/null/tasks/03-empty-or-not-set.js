// Task 3: Empty or not set?
// Lecture: null
//
// A profile form can leave the nickname field in three states. When the user never
// touched it, the value is undefined. When the user cleared it on purpose, the value
// is null. Otherwise it holds the nickname. Write fieldState(value): it returns
// 'not set' for undefined, 'cleared' for null and 'filled' for any other value.
// null == undefined is true, so the checks must be strict.
//
// Examples:
//   fieldState(undefined)   // 'not set'
//   fieldState(null)        // 'cleared'
//   fieldState('jsfan')     // 'filled'
//
// Run the tests: npm test -- 06-types/null

export function fieldState(value) {
    // Your code here
}
