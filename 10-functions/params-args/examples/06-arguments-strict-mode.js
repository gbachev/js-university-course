'use strict';

// In strict mode, changing a parameter does not change arguments. Our example files
// are modules, and modules are always in strict mode, so the line above only repeats
// it. To see the non-strict behavior, run 07-arguments-sloppy-mode.cjs.
function demo(x) {
    x = 10;
    console.log(arguments[0]); // 5, not 10
}

demo(5);
