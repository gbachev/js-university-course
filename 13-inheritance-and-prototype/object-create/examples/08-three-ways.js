// Three ways to give an object a prototype, all with the same chain.
const defaults = {
    theme: 'light',
    language: 'en'
};

const created = Object.create(defaults);
created.theme = 'dark';

const literal = {
    __proto__: defaults,
    theme: 'dark'
};

const changed = Object.setPrototypeOf({ theme: 'dark' }, defaults);

console.log(created.language, literal.language, changed.language); // en en en
console.log(Object.keys(literal)); // [ 'theme' ]
