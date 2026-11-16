// Object.create(proto) returns a new, empty object linked to proto.
const defaults = {
    theme: 'light',
    language: 'en',
    notifications: true
};

const settings = Object.create(defaults);

settings.theme = 'dark';

console.log(Object.getPrototypeOf(settings) === defaults); // true
console.log(settings.theme); // dark
console.log(settings.language); // en
console.log(Object.keys(settings)); // [ 'theme' ]

// The prototype must be an object or null.
try {
    Object.create('defaults');
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Object prototype may only be an Object or null: defaults
}
