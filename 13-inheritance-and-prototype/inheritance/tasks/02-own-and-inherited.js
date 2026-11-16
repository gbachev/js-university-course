// Task 2: Own and inherited
// Lecture: Inheritance
//
// Before we send an object to the server, we want to see which of its properties
// would get lost on the way. Write splitKeys(obj): it returns an object with two
// arrays, own and inherited. own lists the enumerable own property names, inherited
// the enumerable names that come from the prototype chain, both in the order
// for...in visits them. An object without a custom prototype has no inherited keys.
//
// Examples:
//   const person = { greet() {} };
//   const johnDoe = { __proto__: person, name: 'John Doe' };
//   splitKeys(johnDoe)   // { own: ['name'], inherited: ['greet'] }
//   splitKeys({ id: 1 }) // { own: ['id'], inherited: [] }
//
// Run the tests: npm test -- 13-inheritance-and-prototype/inheritance

export function splitKeys(obj) {
    // Your code here
}
