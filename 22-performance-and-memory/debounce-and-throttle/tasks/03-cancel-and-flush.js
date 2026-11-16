// Task 3: Cancel and flush
// Lecture: Debounce and Throttle
//
// Our autosave is debounced, and the editor needs two more controls. Write
// debounce(fn, delay) like in the lecture (fn runs once, delay ms after the last call,
// with its arguments), and give the returned function two methods:
//   cancel() - the pending run never happens (the editor closed without saving)
//   flush()  - the pending run happens right now instead of later (the user pressed
//              Save), and does not happen again when the timer would have fired
// When nothing is pending, cancel() and flush() do nothing. After either of them, new
// calls work as usual.
//
// Examples:
//   const save = debounce((text) => console.log(`Saved: ${text}`), 1000);
//   save('Dune'); save.flush();    // Saved: Dune, right away
//   save('Emma'); save.cancel();   // nothing is ever saved
//
// Run the tests: npm test -- 22-performance-and-memory/debounce-and-throttle

export function debounce(fn, delay) {
    // Your code here
}
