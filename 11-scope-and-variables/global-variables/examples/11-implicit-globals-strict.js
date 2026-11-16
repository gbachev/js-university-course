'use strict';

// Modules are strict anyway, so the directive above only says what we mean here.
function assignUser() {
    user = 'Alex'; // ReferenceError: user is not defined
}

try {
    assignUser();
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: user is not defined
}
