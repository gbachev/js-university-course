// Task 3: Many clicks, one summary
// Lecture: Measuring Performance
//
// We clicked "Mark read" ten times, so every measure name shows up ten times in
// performance.getEntriesByType('measure'), and our array may hold the marks from
// getEntriesByType('mark') too. Write summarize(entries): it gets an array of entries (name, entryType,
// duration) and returns an object with one key per measure name. Each value is
// { count, total, average }: how many measures had that name, their durations added up,
// and the average. Round total and average to one decimal (Math.round(x * 10) / 10).
// Marks are left out, and no entries give an empty object.
//
// Examples:
//   summarize([
//       { name: 'render', entryType: 'measure', duration: 10 },
//       { name: 'render', entryType: 'measure', duration: 12.5 },
//       { name: 'save', entryType: 'measure', duration: 0.5 },
//   ])
//   // { render: { count: 2, total: 22.5, average: 11.3 },
//   //   save: { count: 1, total: 0.5, average: 0.5 } }
//
// Run the tests: npm test -- 22-performance-and-memory/measuring-performance

export function summarize(entries) {
    // Your code here
}
