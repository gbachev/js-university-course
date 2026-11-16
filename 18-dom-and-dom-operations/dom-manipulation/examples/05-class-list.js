// classList changes one class at a time. toggle() returns whether the class is there now.
const dune = document.querySelector('li');

dune.classList.add('read', 'favorite');
dune.classList.remove('favorite');
console.log(dune.className); // read
console.log(dune.classList.contains('read')); // true

console.log(dune.classList.toggle('read')); // false
console.log(dune.classList.toggle('read')); // true
