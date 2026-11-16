// __proto__ reads and writes the same link, through an accessor on Object.prototype.
const defaults = {
    theme: 'light'
};

const settings = {};

settings.__proto__ = defaults;

console.log(settings.__proto__ === Object.getPrototypeOf(settings)); // true
console.log(settings.theme); // light
