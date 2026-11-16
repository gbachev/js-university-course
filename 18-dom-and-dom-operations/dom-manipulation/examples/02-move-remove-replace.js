// A node lives in one place only, so inserting one that is on the page moves it.
const list = document.querySelector('ul');
const [dune, emma] = list.children;

list.append(dune);
console.log(list.lastElementChild === dune); // true
console.log(list.children.length); // 2

emma.remove();
console.log(emma.isConnected); // false

const persuasion = document.createElement('li');
persuasion.textContent = 'Persuasion';
dune.replaceWith(persuasion);
console.log(list.firstElementChild.textContent); // Persuasion

list.replaceChildren();
console.log(list.childNodes.length); // 0
