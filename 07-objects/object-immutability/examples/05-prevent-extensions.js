// Object.preventExtensions(): no new properties, but deletes and changes are allowed.
const config = { debug: true };

Object.preventExtensions(config);

try {
    config.newProp = 'test'; // fails
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Cannot add property newProp, object is not extensible
}

delete config.debug; // allowed

console.log(config); // {}
