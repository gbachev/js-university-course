// This file ends in .cjs, so Node runs it as a plain script in sloppy mode, like the
// code in the lecture. In a module (every .js file of this repository is one) the
// assignment throws a ReferenceError instead.
function fn() {
    mistaken = 123; // becomes global in sloppy (non-strict) mode
}

fn();
console.log(globalThis.mistaken); // 123
