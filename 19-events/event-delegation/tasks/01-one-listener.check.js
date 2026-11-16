import { check, deepEqual, equal, source } from '/lib/browser-check.js';

const { addBook, setUpRemoving } = await import(source('01-one-listener.js'));

const list = document.querySelector('#book-list');
const count = document.querySelector('#count');
setUpRemoving(list, count);

function keys() {
    return [...list.children].map((book) => book.dataset.key);
}

check('a click on the title removes nothing', () => {
    list.querySelector('.title').click();
    deepEqual(keys(), ['dune', 'emma']);
});

check('a click on the icon removes the book and updates the count', () => {
    list.querySelector('[data-key="dune"] .icon').click();
    deepEqual(keys(), ['emma']);
    equal(count.textContent, '1 book');
});

check('a book added later can be removed', () => {
    addBook(list, 'neuromancer', 'Neuromancer');
    equal(count.textContent, '1 book', 'adding a book does not touch the count');
    list.querySelector('[data-key="neuromancer"] button').click();
    deepEqual(keys(), ['emma']);
    equal(count.textContent, '1 book');
});

check('removing the last book says "0 books"', () => {
    list.querySelector('[data-key="emma"] button').click();
    deepEqual(keys(), []);
    equal(count.textContent, '0 books');
});
