let globalSymbol = Symbol.for('app.author');
let sameGlobalSymbol = Symbol.for('app.author');
console.log(globalSymbol === sameGlobalSymbol); // true

let key = Symbol.keyFor(globalSymbol);
console.log(key); // app.author
