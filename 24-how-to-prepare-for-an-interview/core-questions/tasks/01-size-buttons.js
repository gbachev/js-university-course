// Task 1: The size buttons
// Lecture: Core JavaScript Questions
//
// A classic interview bug. createSizeHandlers(sizes) returns one click handler per
// shoe size, and each handler returns the label of its own size: 'Size 40'. Right now
// every handler returns 'Size undefined', because the loop uses var and all the
// handlers share one i. Fix it, then explain the fix out loud in two sentences, as we
// would in an interview. An empty list gives an empty array.
//
// Examples:
//   const handlers = createSizeHandlers([40, 41, 42]);
//   handlers[0]()   // 'Size 40'
//   handlers[2]()   // 'Size 42'
//
// Run the tests: npm test -- 24-how-to-prepare-for-an-interview/core-questions

export function createSizeHandlers(sizes) {
    const handlers = [];
    for (var i = 0; i < sizes.length; i++) {
        handlers.push(() => `Size ${sizes[i]}`);
    }
    return handlers;
}
