// Symbol.for() creates a shared symbol in the global Symbol registry.
const sym1 = Symbol.for('value');
console.log(sym1); // Symbol(value)
