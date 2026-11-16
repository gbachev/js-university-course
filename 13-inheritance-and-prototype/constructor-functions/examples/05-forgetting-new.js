// In strict mode, a constructor called without new has this as undefined.
// This file is a module, which is always in strict mode, even without 'use strict'.
'use strict';

function Person(name) {
    this.name = name;
}

try {
    const johnDoe = Person('John Doe');
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Cannot set properties of undefined (setting 'name')
}
