// Task 2: The date on the receipt
// Lecture: The Intl API
//
// The receipt we email shows when the order was placed, in the customer's language
// and time zone. Our server runs in UTC, so the time zone must always be passed in.
// Write formatReceiptDate(date, locale, timeZone), which returns the date with
// dateStyle 'long' and timeStyle 'short'. Mind the orders placed late in the
// evening: 22:30 UTC is already the next day in Europe/Sofia. The tests replace
// non-breaking spaces in our output with ordinary ones before they compare.
//
// Examples:
//   const placedAt = new Date('2026-03-01T18:45:00Z');
//   formatReceiptDate(placedAt, 'en-US', 'Europe/Sofia')
//   // 'March 1, 2026 at 8:45 PM'
//   formatReceiptDate(placedAt, 'de-DE', 'Europe/Sofia')
//   // '1. März 2026 um 20:45'
//   formatReceiptDate(placedAt, 'en-US', 'America/New_York')
//   // 'March 1, 2026 at 1:45 PM'
//
// Run the tests: npm test -- 15-built-in-objects/intl

export function formatReceiptDate(date, locale, timeZone) {
    // Your code here
}
