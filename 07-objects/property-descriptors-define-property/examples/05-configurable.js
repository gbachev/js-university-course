// configurable: false - the property cannot be deleted or redefined.
const user = {};

Object.defineProperty(user, 'name', {
    value: 'John',
    writable: false,
    enumerable: true,
    configurable: false
});

// delete fails: silently outside strict mode, with an error in our module.
try {
    delete user.name;
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Cannot delete property 'name' of #<Object>
}

// Redefining the property throws, in strict mode or not.
try {
    Object.defineProperty(user, 'name', {
        value: 'Jane'
    });
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Cannot redefine property: name
}

console.log(user.name); // John
