// In a null-prototype object, __proto__ is an ordinary key and no methods are inherited.
const dictionary = Object.create(null);

dictionary.__proto__ = 'just a key';
dictionary.color = 'blue';

console.log(Object.getPrototypeOf(dictionary)); // null
console.log(Object.keys(dictionary)); // [ '__proto__', 'color' ]
console.log('toString' in dictionary); // false
console.log(Object.hasOwn(dictionary, 'color')); // true

try {
    dictionary.hasOwnProperty('color');
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: dictionary.hasOwnProperty is not a function
}
