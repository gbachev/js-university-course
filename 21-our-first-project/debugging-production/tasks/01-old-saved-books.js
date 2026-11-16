// Task 1: Old saved books
// Lecture: Debugging in Production
//
// In our imagined 1.1.0, addedText(book) returns the day a book was added, such as
// 'Added 2026-11-14'. Books saved by 1.0.0 have no addedAt, and for them it throws
// RangeError: Invalid time value, so the whole list stays empty. The tests already
// include the old-data test, and it fails. Fix addedText() so it returns an empty
// string for a book without addedAt, and keep the day for every other book.
//
// Examples:
//   addedText({ key: 'dune', title: 'Dune', read: true, addedAt: Date.UTC(2026, 10, 14) })
//   // 'Added 2026-11-14'
//   addedText({ key: 'dune', title: 'Dune', read: true })   // ''
//
// Run the tests: npm test -- 21-our-first-project/debugging-production

// src/state.js (version 1.1.0), with the bug.
export function addedText(book) {
    const day = new Date(book.addedAt).toISOString().slice(0, 10);
    return `Added ${day}`;
}
