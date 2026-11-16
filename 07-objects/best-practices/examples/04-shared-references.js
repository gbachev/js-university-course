// Assigning an object copies the reference, so both names change one object.
const original = { a: 1 };
const copy = original;
copy.a = 2;

console.log(original.a); // 2

// When we need a real copy, we clone the object.
const realCopy = { ...original };
realCopy.a = 3;

console.log(original.a); // 2 - the original keeps its value
