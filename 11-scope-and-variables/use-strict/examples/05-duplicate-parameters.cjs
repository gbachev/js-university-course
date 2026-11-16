// Sloppy mode: a .cjs file without 'use strict'. Duplicate parameter names are allowed,
// and the last a wins.
function sum(a, a, b) {
    return a + b;
}

console.log(sum(1, 2, 3)); // 5 (a is 2, b is 3)

// In strict mode the same function is a SyntaxError, and then the file does not run at
// all. In a module, or with 'use strict' at the top of the file, before any other
// statement, this would fail:
// function sum(a, a, b) {}
// SyntaxError: Duplicate parameter name not allowed in this context
