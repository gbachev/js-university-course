// Task 1: Find the owner
// Lecture: Brief Intro to Prototypes and Inheritance
//
// Our app builds its settings as a chain: a user's settings inherit from the team's
// settings, which inherit from the app defaults. When a value looks wrong, we want to
// know which object in the chain it comes from. Write findOwner(obj, key): starting
// with obj, it walks up the chain with Object.getPrototypeOf() and returns the first
// object that has key as its own property (hasOwnProperty). When no object in the
// chain has it, the walk reaches null and the function returns null.
//
// Examples:
//   const defaults = { theme: 'light', language: 'en' };
//   const team = Object.create(defaults);
//   team.language = 'de';
//   const user = Object.create(team);
//   findOwner(user, 'language') === team       // true
//   findOwner(user, 'theme') === defaults      // true
//   findOwner(user, 'fontSize')                // null
//
// Run the tests: npm test -- 07-objects/prototypes-inheritance-intro

export function findOwner(obj, key) {
    // Your code here
}
