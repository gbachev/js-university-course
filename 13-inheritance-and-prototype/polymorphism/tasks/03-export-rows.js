// Task 3: Export what can be exported
// Lecture: Polymorphism
//
// Our admin panel exports a report to a spreadsheet. The report mixes class
// instances, objects from factory functions and plain literals, and only some of them
// can be exported. Write exportRows(items): it returns an array with the result of
// item.toRow() for every item that has a toRow method, in order, and skips the rest,
// also an item whose toRow is not a function. Check the capability, not the class.
//
// Examples:
//   const order = { toRow: () => 'order,42' };
//   const note = { text: 'Call back' };
//   exportRows([order, note])        // ['order,42']
//   exportRows([])                   // []
//
// Run the tests: npm test -- 13-inheritance-and-prototype/polymorphism

export function exportRows(items) {
    // Your code here
}
