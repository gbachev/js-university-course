// Task 3: Add the cause
// Lecture: throw and Error Objects
//
// loadProfile(text) reads a user profile saved as JSON text and returns it. When the
// text is broken, the SyntaxError from JSON.parse() alone does not say what we were
// reading. Catch it and throw a new Error with the message 'Could not load the
// profile', with the original SyntaxError as its cause.
//
// Examples:
//   loadProfile('{"name":"Jane Doe"}')   // { name: 'Jane Doe' }
//   loadProfile('{name: Jane Doe}')      // throws Error: Could not load the profile
//                                        // error.cause is the SyntaxError
//
// Run the tests: npm test -- 16-error-handling-and-debugging/throw-and-error-objects

export function loadProfile(text) {
    return JSON.parse(text);
}
