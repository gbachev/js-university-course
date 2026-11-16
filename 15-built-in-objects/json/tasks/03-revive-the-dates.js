// Task 3: Revive the dates
// Lecture: JSON
//
// An orders API sends dates as ISO strings in properties whose names end in 'At':
// placedAt, paidAt, shippedAt. Write parseOrder(text), which parses the JSON with
// a reviver that turns every such string into a Date. A date property that is null
// (not shipped yet) stays null, and all other properties stay as they are, also
// inside nested objects such as the items.
//
// Examples:
//   const order = parseOrder('{"id":1042,"placedAt":"2026-11-15T09:30:00.000Z"}');
//   order.placedAt instanceof Date      // true
//   order.placedAt.getUTCDate()         // 15
//
// Run the tests: npm test -- 15-built-in-objects/json

export function parseOrder(text) {
    // Your code here
}
