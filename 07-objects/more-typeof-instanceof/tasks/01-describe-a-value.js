// Task 1: Describe a value
// Lecture: typeof vs instanceof
//
// Our form builder logs what kind of value each field holds, and typeof alone says
// 'object' too often. Write describeValue(value): it returns 'null' for null, 'array'
// for an array, 'date' for a Date, and for everything else what typeof returns
// ('string', 'number', 'boolean', 'undefined', 'function', 'object' and so on).
// Watch out: typeof null is 'object' too.
//
// Examples:
//   describeValue('Anna')            // 'string'
//   describeValue(null)              // 'null'
//   describeValue(['a', 'b'])        // 'array'
//   describeValue(new Date())        // 'date'
//   describeValue({ id: 1 })         // 'object'
//
// Run the tests: npm test -- 07-objects/more-typeof-instanceof

export function describeValue(value) {
    // Your code here
}
