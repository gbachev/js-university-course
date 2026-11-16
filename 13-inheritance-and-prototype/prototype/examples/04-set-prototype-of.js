// Object.setPrototypeOf() gives the user's settings a set of defaults.
const defaults = {
    theme: 'light',
    language: 'en',
    notifications: true
};

const settings = {
    theme: 'dark'
};

Object.setPrototypeOf(settings, defaults);

console.log(Object.getPrototypeOf(settings) === defaults); // true
console.log(settings.theme); // dark
console.log(settings.language); // en
console.log(settings.notifications); // true

// The chain would become a loop, so JavaScript throws.
try {
    Object.setPrototypeOf(defaults, settings);
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Cyclic __proto__ value
}
