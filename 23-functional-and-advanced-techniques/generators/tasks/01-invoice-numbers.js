// Task 1: Endless invoice numbers
// Lecture: Generators (function*)
//
// Write the generator function invoiceNumbers(year, start). It yields invoice numbers
// without end: 'INV-2026-0001', 'INV-2026-0002' and so on, the number padded to four
// digits with zeros. String(number).padStart(4, '0') adds the zeros in front and leaves
// longer numbers as they are. It starts at start, or at 1 when we leave start out. Since the
// sequence never ends, we read it with next() or take(), never with a plain spread.
// Every call gives a new, independent sequence.
//
// Examples:
//   const numbers = invoiceNumbers(2026);
//   numbers.next().value                         // 'INV-2026-0001'
//   invoiceNumbers(2027, 41).take(2).toArray()   // ['INV-2027-0041', 'INV-2027-0042']
//
// Run the tests: npm test -- 23-functional-and-advanced-techniques/generators

export function* invoiceNumbers(year, start) {
    // Your code here
}
