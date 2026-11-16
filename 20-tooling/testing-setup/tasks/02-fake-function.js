// Task 2: Our own vi.fn()
// Lecture: Testing Setup
//
// vi.fn() creates a fake function that records how it was called. Write
// createMock(implementation): it returns a function that calls implementation with
// the same arguments and returns its result. Without an implementation it returns
// undefined. The returned function has a calls property: an array with one array of
// arguments per call, in order. It also has a calledOnce() method that returns true
// when it was called exactly once.
//
// Examples:
//   const fakeFetch = createMock((url) => ({ ok: true, url }));
//   fakeFetch('/search.json?q=dune');   // { ok: true, url: '/search.json?q=dune' }
//   fakeFetch.calls                     // [['/search.json?q=dune']]
//   fakeFetch.calledOnce()              // true
//
// Run the tests: npm test -- 20-tooling/testing-setup

export function createMock(implementation) {
    // Your code here
}
