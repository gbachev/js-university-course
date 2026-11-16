// Task 2: Oldest order first
// Lecture: Dates and Times
//
// sortByPlacedAt(orders) should return the orders sorted by their placedAt date,
// the oldest first. Each placedAt is a Date. The code below has two bugs: the
// compare function returns true or false instead of a number, and sort() changes
// the array the caller passed in. Fix both. Two orders placed at the same moment
// keep their order.
//
// Examples:
//   sortByPlacedAt([
//       { id: 2, placedAt: new Date('2026-03-04T15:00:00Z') },
//       { id: 1, placedAt: new Date('2026-03-01T09:30:00Z') },
//   ])
//   // [{ id: 1, ... }, { id: 2, ... }]
//
// Run the tests: npm test -- 15-built-in-objects/dates-and-times

export function sortByPlacedAt(orders) {
    return orders.sort((a, b) => a.placedAt > b.placedAt);
}
