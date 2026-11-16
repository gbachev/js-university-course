// Task 3: Read a typed date
// Lecture: Dates and Times
//
// Users type their birthday as DD.MM.YYYY, for example '01.03.2026' for 1 March.
// new Date() would guess, so we read the parts ourselves. Write parseTypedDate(text),
// which returns a Date at local midnight of that day, or null when the text is not
// a real date. Split the text on '.', and remember that months start at 0. Return
// null when there are not exactly three parts, when a part is not a number, and
// when the date rolls over: '31.02.2026' would become 3 March, so it is not valid.
//
// Examples:
//   parseTypedDate('01.03.2026')     // March 1, 2026, 00:00 local time
//   parseTypedDate('31.02.2026')     // null
//   parseTypedDate('2026-03-01')     // null
//
// Run the tests: npm test -- 15-built-in-objects/dates-and-times

export function parseTypedDate(text) {
    // Your code here
}
