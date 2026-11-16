// A .cjs file with the directive at the top of the file, before any other statement,
// so the whole file is strict.
// The directive only works there or at the start of a function body: further down
// the file it is an ordinary string and changes nothing.
'use strict';

function showStrict() {
    console.log(this); // undefined
}
showStrict();
