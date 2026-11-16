import { check, deepEqual, source } from '/lib/browser-check.js';

const { bookTitles } = await import(source('02-book-titles.js'));

check('we get the three titles of the reading list in page order', () => {
    deepEqual(bookTitles(document.querySelector('#to-read')), ['Dune', 'Emma', 'Neuromancer']);
});

check('an empty list gives an empty array', () => {
    deepEqual(bookTitles(document.createElement('ul')), []);
});

check('a new book shows up in the titles', () => {
    const list = document.createElement('ul');
    const book = document.createElement('li');
    book.append('Persuasion');
    list.append(' ', book, ' ');
    deepEqual(bookTitles(list), ['Persuasion']);
});
