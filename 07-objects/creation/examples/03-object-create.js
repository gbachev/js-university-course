// Object.create: a new object with base as its prototype.
let base = { active: true };
let child = Object.create(base);
child.name = 'Child';

console.log(child); // { name: 'Child' }
console.log(child.active); // true (inherited from base)
