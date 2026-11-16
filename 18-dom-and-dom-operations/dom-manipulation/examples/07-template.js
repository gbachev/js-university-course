// A template holds markup the browser parses but never shows. We clone it for each book.
const template = document.querySelector('#book-row');
const list = document.querySelector('ul');
const books = [
    { title: 'Persuasion', author: 'Jane Austen' },
    { title: 'Neuromancer', author: 'William Gibson' },
];

for (const book of books) {
    const row = template.content.cloneNode(true);
    row.querySelector('.title').textContent = book.title;
    row.querySelector('.author').textContent = book.author;
    list.append(row);
}

console.log(list.children.length); // 4
console.log(list.lastElementChild.textContent.trim());
// Neuromancer by William Gibson
console.log(template.content.children.length); // 1
