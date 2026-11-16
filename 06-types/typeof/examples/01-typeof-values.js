let str = 'Hi!';
let bool = true;
let num = 5;
let bigint = BigInt(Number.MAX_SAFE_INTEGER) + 1n;
let sym = Symbol('symbol');
let obj = {};
let arr = [];
let strWrapper = new String('JavaScript');
let n = null;
let f = function () {};

console.log(typeof str); // string
console.log(typeof bool); // boolean
console.log(typeof num); // number
console.log(typeof bigint); // bigint
console.log(typeof sym); // symbol
console.log(typeof obj); // object
console.log(typeof arr); // object
console.log(typeof strWrapper); // object
console.log(typeof n); // object
console.log(typeof undefined); // undefined
console.log(typeof f); // function
