// Sloppy mode: a .cjs file without 'use strict'.
function show() {
    console.log(this === globalThis); // true: this is the global object
}
show();
