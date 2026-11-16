// Task 2: The slowest measure
// Lecture: Measuring Performance
//
// After a click we put performance.getEntriesByType('mark') and
// performance.getEntriesByType('measure') in one array, so marks and measures are mixed.
// Write slowestMeasure(entries): it gets such an array, each entry with name, entryType
// ('mark' or 'measure') and duration, and returns the name of the measure with the
// longest duration. Marks do not count, whatever their duration. When there is no
// measure at all, it returns null. On a tie, the first measure wins.
//
// Examples:
//   slowestMeasure([
//       { name: 'save-start', entryType: 'mark', duration: 0 },
//       { name: 'save', entryType: 'measure', duration: 0.5 },
//       { name: 'render', entryType: 'measure', duration: 10.6 },
//   ])   // 'render'
//   slowestMeasure([])   // null
//
// Run the tests: npm test -- 22-performance-and-memory/measuring-performance

export function slowestMeasure(entries) {
    // Your code here
}
