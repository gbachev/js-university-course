// createElement() makes an element off the page. append, prepend, before and after insert it.
const list = document.querySelector('ul');

const book = document.createElement('li');
book.textContent = 'Neuromancer';
book.title = 'Added today';
book.setAttribute('data-year', '1984');
list.append(book);

const first = document.createElement('li');
first.textContent = 'Ulysses';
list.prepend(first);

const count = document.createElement('p');
count.textContent = '4 books';
list.after(count);

list.before('Sorted by date');

console.log(list.children.length); // 4
console.log(list.firstElementChild.textContent); // Ulysses
console.log(list.lastElementChild.outerHTML);
// <li title="Added today" data-year="1984">Neuromancer</li>
