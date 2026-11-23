// Task 2: The autocomplete core
// Lecture: Real-World Questions
//
// The heart of the autocomplete from the lecture, with fetch passed in so the tests
// can give it a fake server. createAutocomplete(fetch, onResults, wait) returns
// type(text), which the input calls on every key. It must:
// - wait for a pause: only after wait ms (300 by default) without a new type() call
//   do we look the query up
// - normalize the query: trimmed and lower case. An empty query gives onResults([])
//   without a request
// - cache by the normalized query: a query we asked before gets onResults(cached)
//   without a request
// - otherwise request fetch(`/api/books?q=${encodeURIComponent(query)}`, { signal });
//   the response's json() gives an array of titles
// - abort the request still waiting when a new request starts or a cached answer is
//   used, so a late answer never reaches onResults (and the abort throws no errors)
// The server ranks the titles, so we pass its answer on as it is.
//
// Examples:
//   const type = createAutocomplete(fetch, (titles) => console.log(titles));
//   type('d'); type('du'); type('Dune ');
//   // 300 ms later one request to /api/books?q=dune, then:
//   // [ 'Dune', 'Dune Messiah', 'Children of Dune' ]
//
// Run the tests: npm test -- 24-how-to-prepare-for-an-interview/real-world-questions

export function createAutocomplete(fetch, onResults, wait = 300) {
    return function type(text) {
        // Your code here
    };
}
