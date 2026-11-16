// Symbol keys are left out of Object.keys(), values() and entries().
const sym = Symbol('secret');
let obj = {
    visible: true,
    [sym]: 'hidden'
};

console.log(Object.keys(obj)); // [ 'visible' ]
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(secret) ]
