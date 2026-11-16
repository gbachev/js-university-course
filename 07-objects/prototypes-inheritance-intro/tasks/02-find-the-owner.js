// Task 2: Find the owner
// Lecture: Prototypes: A First Look
//
// Our app builds its settings as a chain: a user's settings link to the team's
// settings, which link to the app defaults. When a value looks wrong, we want to know
// which object in the chain it comes from. Write findOwner(obj, key): starting with
// obj, it returns the first object in the chain that has key as its own property
// (Object.hasOwn(object, key) tells us). Object.getPrototypeOf(object) gives the next
// object in the chain, the one the hidden link points to. The chain ends with null:
// when no object has the key, findOwner returns null. The tests build the chain.
//
// Examples (user -> team -> defaults -> Object.prototype -> null, where user has its
// own theme, team its own language and defaults its own notifications):
//   findOwner(user, 'theme') === user                  // true
//   findOwner(user, 'language') === team               // true
//   findOwner(user, 'notifications') === defaults      // true
//   findOwner(user, 'toString') === Object.prototype   // true
//   findOwner(user, 'fontSize')                        // null
//
// Run the tests: npm test -- 07-objects/prototypes-inheritance-intro

export function findOwner(obj, key) {
    // Your code here
}
