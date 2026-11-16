// This file ends in .cjs, so Node runs it as a plain script in sloppy mode, like the
// code in the lecture. In a module (every .js file of this repository is one) code runs
// in strict mode, and there user = 'Alex' throws a ReferenceError instead.
function assignUser() {
    user = 'Alex'; // no var, let, or const
}
assignUser();

console.log(globalThis.user); // Alex
