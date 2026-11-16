// Each += parses the whole list again, and the old li elements are thrown away.
const list = document.querySelector('ul');
const dune = list.firstElementChild;
const titles = ['Ulysses', 'Persuasion', 'Neuromancer'];

for (const title of titles) {
    list.innerHTML += `<li>${title}</li>`;
}

console.log(list.children.length); // 5
console.log(dune.isConnected); // false
