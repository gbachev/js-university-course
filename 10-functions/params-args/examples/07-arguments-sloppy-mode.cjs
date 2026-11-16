// A .cjs file is a CommonJS file, not an ES module, so it does not run in strict mode
// unless we ask for it.
// Without strict mode, arguments is linked to the parameters: changing x changes
// arguments[0] too. A browser script without 'use strict' behaves the same way.
function demo(x) {
    x = 10;
    console.log(arguments[0]); // 10
}

demo(5);
