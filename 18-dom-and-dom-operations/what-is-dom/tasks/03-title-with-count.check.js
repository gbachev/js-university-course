import { check, equal, source } from '/lib/browser-check.js';

const { showCount } = await import(source('03-title-with-count.js'));
const list = document.querySelector('#to-read');

check('the title counts the 3 books of the reading list', () => {
    showCount(list);
    equal(document.title, 'To Read (3)');
});

check('showCount returns the new title', () => {
    equal(showCount(list), 'To Read (3)');
});

check('an empty list gives To Read (0)', () => {
    equal(showCount(document.createElement('ul')), 'To Read (0)');
    equal(document.title, 'To Read (0)');
});

check('whitespace between two books does not count', () => {
    const books = document.createElement('ul');
    books.append(document.createElement('li'), ' ', document.createElement('li'));
    equal(showCount(books), 'To Read (2)');
    showCount(list);
});
