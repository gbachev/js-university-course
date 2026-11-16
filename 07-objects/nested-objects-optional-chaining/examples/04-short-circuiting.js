// At the first null or undefined link the whole chain stops.
let obj1 = {};

let result = obj1?.obj2?.obj3.prop;

// obj1.obj2 is undefined, so result is undefined.
// No attempt is made to access obj3 or prop, so obj3.prop does not throw.
console.log(result); // undefined
