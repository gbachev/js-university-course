// Task 1: The type tag
// Lecture: this in Functions: call(), apply() and bind()
//
// Our order importer gets values of every kind, and typeof says 'object' for arrays,
// dates and null alike. Write typeTag(value): it borrows Object.prototype.toString
// with call, so that value is its this, and returns only the name inside the tag,
// such as 'Array' from '[object Array]'. The tests check arrays, dates, null,
// undefined, numbers and plain objects.
//
// Examples:
//   typeTag([1, 2])        // 'Array'
//   typeTag(null)          // 'Null'
//   typeTag(new Date())    // 'Date'
//
// Run the tests: npm test -- 14-more-on-functions/this-in-functions

export function typeTag(value) {
    // Your code here
}
