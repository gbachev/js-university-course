// Symbol keys do not show up in Object.keys(), JSON.stringify() or for...in.
let sym = Symbol('my symbol');
let obj = {};

obj[sym] = '123';
console.log(obj); // { [Symbol(my symbol)]: '123' }
console.log(Object.keys(obj)); // []
console.log(JSON.stringify(obj)); // {}

for (let key in obj) {
    console.log(key); // never gets here
}

console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(my symbol) ]
