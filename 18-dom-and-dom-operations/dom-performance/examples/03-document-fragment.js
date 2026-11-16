// A DocumentFragment is a container outside the page. Its children move into the list.
const list = document.querySelector('ul');
const titles = ['Ulysses', 'Persuasion', 'Neuromancer'];

const fragment = document.createDocumentFragment();
for (const title of titles) {
    const row = document.createElement('li');
    row.textContent = title;
    fragment.append(row);
}

console.log(fragment.isConnected); // false
list.append(fragment);
console.log(fragment.childNodes.length); // 0
console.log(list.children.length); // 5
