// errorName() runs a function and returns the name of what it throws.
function errorName(code) {
    try {
        code();
    } catch (error) {
        return error.name;
    }
}

const cart = {};
const total = 120;

console.log(errorName(() => cart.items.length)); // TypeError
console.log(errorName(() => '-'.repeat(-1))); // RangeError
console.log(errorName(() => JSON.parse('{id: 7}'))); // SyntaxError
console.log(errorName(() => totl * 2)); // ReferenceError
console.log(errorName(() => decodeURIComponent('50%'))); // URIError
