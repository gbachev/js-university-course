// instanceof checks the prototype chain against a constructor.

// Primitives
let b = true;
let n = 123;
let str = 'some string';
let un;
let nl = null; // a primitive, although typeof null returns 'object'

// Objects
let obj = {};
let b_obj = new Boolean(true);
let n_obj = new Number(123);
let str_obj = new String('some string');
let arr = ['a', 'b', 'c'];
let date = new Date('March 3, 1878');
let f = function () {
    console.log('I am a test function.');
};
let regexp = new RegExp('ab+c');

// false - null isn't an instance of Object although typeof null returns object
console.log('null instanceof Object:', nl instanceof Object);

console.log('');
console.log('undefined instanceof Object:', un instanceof Object); // false

console.log('');
console.log('Object instanceof Object:', obj instanceof Object); // true

console.log('');
console.log('Is number (primitive value) instanceof Object:', n instanceof Object); // false
console.log('Is number (primitive value) instanceof Number:', n instanceof Number); // false
console.log('Is Number instanceof Object:', n_obj instanceof Object); // true
console.log('Is Number instanceof Number:', n_obj instanceof Number); // true

console.log('');
console.log('Is boolean (primitive value) instanceof Object:', b instanceof Object); // false
console.log('Is boolean (primitive value) instanceof Boolean:', b instanceof Boolean); // false
console.log('Is Boolean instanceof Object:', b_obj instanceof Object); // true
console.log('Is Boolean instanceof Boolean:', b_obj instanceof Boolean); // true

console.log('');
console.log('Is string (primitive value) instanceof Object:', str instanceof Object); // false
console.log('Is string (primitive value) instanceof String:', str instanceof String); // false
console.log('Is String instanceof Object:', str_obj instanceof Object); // true
console.log('Is String instanceof String:', str_obj instanceof String); // true

console.log('');
console.log('[] instanceof Object:', arr instanceof Object); // true
console.log('[] instanceof Array:', arr instanceof Array); // true

console.log('');
console.log('Date instanceof Object:', date instanceof Object); // true
console.log('Date instanceof Date:', date instanceof Date); // true

console.log('');
console.log('Function instanceof Object:', f instanceof Object); // true
console.log('Function instanceof Function:', f instanceof Function); // true

console.log('');
console.log('RegExp instanceof Object:', regexp instanceof Object); // true
console.log('RegExp instanceof RegExp:', regexp instanceof RegExp); // true
