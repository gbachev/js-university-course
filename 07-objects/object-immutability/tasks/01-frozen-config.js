// Task 1: A frozen config
// Lecture: Object Immutability
//
// The config of our app is read in many places, and no part of the code may change it
// by accident. Write createConfig(apiUrl, retries): it returns an object with the
// properties apiUrl and retries, frozen. In strict mode (and the tests run in strict
// mode) every attempt to change, add or delete a property then throws a TypeError.
//
// Examples:
//   const config = createConfig('https://api.example.com', 3);
//   config.retries          // 3
//   config.retries = 10;    // TypeError
//
// Run the tests: npm test -- 07-objects/object-immutability

export function createConfig(apiUrl, retries) {
    // Your code here
}
