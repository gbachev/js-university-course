let falseValues = [
    new Boolean(false),
    new Boolean(0),
    new Boolean(-0),
    new Boolean(null),
    new Boolean(undefined),
    new Boolean(''),
    new Boolean()
];

let trueValues = [
    new Boolean(1),
    new Boolean(10),
    new Boolean('false'),
    new Boolean({}),
    new Boolean([])
];

console.log(falseValues); // an array of 7 wrapper objects, each one [Boolean: false]
console.log(trueValues); // an array of 5 wrapper objects, each one [Boolean: true]

// In practice we convert to a boolean primitive with Boolean() or !!, without new.
console.log(Boolean('')); // false
console.log(Boolean('0')); // true, a non-empty string
console.log(Boolean('false')); // true, a non-empty string
console.log(!!0); // false
console.log(!!'hello'); // true
