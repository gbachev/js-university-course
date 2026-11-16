// Writing creates an own property that shadows the inherited one.
const defaults = {
    theme: 'light',
    language: 'en',
    notifications: true
};

const settings = {
    theme: 'dark'
};

Object.setPrototypeOf(settings, defaults);

settings.language = 'bg';

console.log(settings.language); // bg
console.log(defaults.language); // en

delete settings.language;

console.log(settings.language); // en
