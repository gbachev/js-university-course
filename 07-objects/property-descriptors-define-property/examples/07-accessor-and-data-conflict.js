// A property is a data property (value) or an accessor (get/set), never both.
const user = {};

try {
    Object.defineProperty(user, 'conflict', {
        value: 10,
        get() {
            return 20;
        }
    });
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Invalid property descriptor. Cannot both specify accessors
    // and a value or writable attribute, #<Object>
}
