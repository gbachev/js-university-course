// for...in skips symbol keys; in and Object.getOwnPropertySymbols() still see them.
const sym = Symbol('secret');
let obj = {
    visible: true,
    [sym]: 'hidden'
};

console.log('visible' in obj); // true
console.log(sym in obj); // true

for (let key in obj) {
    console.log(key); // logs 'visible', but not the symbol key
}

console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(secret) ]
