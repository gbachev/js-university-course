import { check, equal, source } from '/lib/browser-check.js';

const { setUpEditing } = await import(source('03-lock-the-list.js'));

const addButton = document.querySelector('#add');
const clearButton = document.querySelector('#clear');
const lockButton = document.querySelector('#lock');
const list = document.querySelector('#books');
setUpEditing(addButton, clearButton, lockButton, list);

check('"Add a book" adds a book', () => {
    addButton.click();
    equal(list.children.length, 3);
    equal(list.lastElementChild.textContent, 'New book');
});

check('"Clear the list" removes every book', () => {
    clearButton.click();
    equal(list.children.length, 0);
    addButton.click();
    equal(list.children.length, 1);
});

check('the lock button gets disabled', () => {
    lockButton.click();
    equal(lockButton.disabled, true);
});

check('after the lock, "Add a book" changes nothing', () => {
    addButton.click();
    equal(list.children.length, 1);
});

check('after the lock, "Clear the list" changes nothing', () => {
    clearButton.click();
    equal(list.children.length, 1);
});
