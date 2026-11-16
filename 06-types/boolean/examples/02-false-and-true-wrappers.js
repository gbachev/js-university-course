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
