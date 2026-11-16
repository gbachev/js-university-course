// A .cjs file, so Node runs it as a plain script in sloppy mode until a directive
// turns strict mode on. Here only the functions with the directive are strict.
function example() {
    'use strict';
    return true;
}

console.log(example()); // true

// The same directive changes what this is in a plain call.
function strictThis() {
    'use strict';
    return this;
}

function sloppyThis() {
    return this;
}

console.log(strictThis()); // undefined
console.log(sloppyThis() === globalThis); // true
