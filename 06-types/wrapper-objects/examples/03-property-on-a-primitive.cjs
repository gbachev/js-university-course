// The property goes to a wrapper object that is destroyed right after the statement.
// This file ends in .cjs, so Node runs it as a plain script, like the code in the
// lecture. In a module (every .js file of this repository is one) code runs in
// strict mode, and there the line a.someProperty = 'some value' throws a TypeError instead.
let a = 'abc';
a.someProperty = 'some value';
console.log(a.someProperty); // undefined
