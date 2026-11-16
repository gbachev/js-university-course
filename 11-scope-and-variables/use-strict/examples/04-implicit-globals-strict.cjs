// A .cjs file, so the directive below is what turns strict mode on.
'use strict';

function assign() {
    user = 'John'; // ReferenceError
}

try {
    assign();
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: user is not defined
}
