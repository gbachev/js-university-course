// A .cjs file: the first function is sloppy, the second has its own directive.
function sloppyChange() {
    Math.PI = 100; // ignored without an error
    console.log(Math.PI); // 3.141592653589793
}

function strictChange() {
    'use strict';
    Math.PI = 100; // TypeError
}

sloppyChange();

try {
    strictChange();
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Cannot assign to read only property 'PI' of object '#<Object>'
}
