// The files of this repository that end in .js are modules, and modules are always
// strict. This one ends in .cjs, so Node runs it as a plain script, and the directive
// at the top of the file, before any other statement, is what turns strict mode on.
'use strict';

let x = 10;
console.log(x); // 10
