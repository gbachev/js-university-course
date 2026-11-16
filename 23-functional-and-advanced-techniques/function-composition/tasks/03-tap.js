// Task 3: Debug without breaking the pipeline
// Lecture: Function Composition
//
// makeSlugger(log) builds a pipeline that turns a book title into a URL slug and writes
// the trimmed title into the log array on the way. It breaks: the logging step returns
// nothing, so slugify() gets undefined. Write tap(fn): it returns a step that calls fn
// with the value, ignores what fn returns, and returns the value unchanged. Then fix
// makeSlugger() with it. Every call of the slugger adds one entry to the log.
//
// Examples:
//   const log = [];
//   makeSlugger(log)('  The Hobbit ')    // 'the-hobbit'
//   log                                  // ['The Hobbit']
//   tap((x) => x * 2)(5)                 // 5
//
// Run the tests: npm test -- 23-functional-and-advanced-techniques/function-composition

const pipe = (...fns) => (x) =>
    fns.reduce((value, fn) => fn(value), x);

const trim = (s) => s.trim();
const slugify = (s) => s.toLowerCase().replace(/\s+/g, '-');

export const tap = (fn) => {
    // Your code here
};

export const makeSlugger = (log) =>
    pipe(
        trim,
        (s) => {
            log.push(s);
        },
        slugify,
    );
