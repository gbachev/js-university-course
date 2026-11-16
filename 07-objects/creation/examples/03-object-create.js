// Object.create: a new object with base as its prototype.
let base = { active: true };
let clone = Object.create(base);
clone.name = 'Clone';

console.log(clone); // { name: 'Clone' }
console.log(clone.active); // true - found on the prototype, base
