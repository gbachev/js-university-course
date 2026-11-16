// Task 1: Which covers to load
// Lecture: Lazy Loading
//
// Before the browser had loading="lazy", we worked out by hand which images were near the
// screen. Write coversToLoad(covers, scrollTop, viewportHeight, margin). Each cover is
// { id, top, height } in pixels from the top of the page. The screen shows the page from
// scrollTop to scrollTop + viewportHeight, and we load ahead: the zone runs from margin
// pixels above the screen to margin pixels below it. Return the ids of the covers that
// overlap the zone, in the order of covers. A cover that only touches the edge of the zone
// (its bottom is exactly the top of the zone, or the other way round) is not loaded.
//
// Examples:
//   const covers = [{ id: 'dune', top: 0, height: 300 }, { id: 'emma', top: 2000, height: 300 }];
//   coversToLoad(covers, 0, 800, 300)      // ['dune']
//   coversToLoad(covers, 1000, 800, 300)   // ['emma'], the zone runs from 700 to 2100
//
// Run the tests: npm test -- 22-performance-and-memory/lazy-loading

export function coversToLoad(covers, scrollTop, viewportHeight, margin) {
    // Your code here
}
