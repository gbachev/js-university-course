// Task 2: Debounce with cancel
// Lecture: Coding Challenges
//
// Write debounce(fn, wait) from memory, the way we would at the interview: it returns
// a function that calls fn only after the calls have stopped for wait milliseconds,
// with the arguments and the this of the last call. Then the follow-up question:
// the returned function also gets a cancel() method, which drops the call that is
// waiting, if there is one. Two calls further apart than wait both run.
//
// Examples:
//   const search = debounce((query) => console.log(`Searching for ${query}`), 300);
//   search('ja');
//   search('java');
//   // 300 ms after the last call: Searching for java
//   search('dune');
//   search.cancel();
//   // nothing more
//
// Run the tests: npm test -- 24-how-to-prepare-for-an-interview/coding-challenges

export function debounce(fn, wait) {
    // Your code here
}
