// typeof gives 'object' for every object, and 'function' for functions.

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
let regexp = new RegExp('ab+c');
let f = function () {
    console.log('I am a test function.');
};

console.log('Primitives:');
console.log('typeof boolean (primitive value):', typeof b); // boolean
console.log('typeof number (primitive value):', typeof n); // number
console.log('typeof string (primitive value):', typeof str); // string
console.log('typeof undefined (primitive value):', typeof un); // undefined
console.log('typeof null:', typeof nl); // object

console.log('');
console.log('Objects:');
console.log('typeof Object:', typeof obj); // object
console.log('typeof Boolean:', typeof b_obj); // object
console.log('typeof Number:', typeof n_obj); // object
console.log('typeof String:', typeof str_obj); // object
console.log('typeof array:', typeof arr); // object
console.log('typeof Date:', typeof date); // object
console.log('typeof RegExp:', typeof regexp); // object
console.log('typeof Function:', typeof f); // function
