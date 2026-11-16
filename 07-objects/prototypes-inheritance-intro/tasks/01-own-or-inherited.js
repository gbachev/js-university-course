// Task 1: Own or inherited?
// Lecture: Prototypes: A First Look
//
// When we debug an object, we want to know where a property comes from. Write
// propertySource(obj, key): it returns 'own' when the object itself has the property,
// 'inherited' when JavaScript finds it up the prototype chain (like toString), and
// 'missing' when it is nowhere in the chain. Object.hasOwn(obj, key) is true only
// for the object's own properties, while key in obj looks up the whole chain. An own
// property counts as own even when its value is undefined.
//
// Examples:
//   propertySource({ name: 'John' }, 'name')        // 'own'
//   propertySource({ name: 'John' }, 'toString')    // 'inherited'
//   propertySource({ name: 'John' }, 'age')         // 'missing'
//
// Run the tests: npm test -- 07-objects/prototypes-inheritance-intro

export function propertySource(obj, key) {
    // Your code here
}
