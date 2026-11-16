// Sloppy mode: a .cjs file without 'use strict' runs as a plain script.
function assign() {
    user = 'John';
}
assign();

console.log(user); // John (global)
