import { check, deepEqual, equal, source } from '/lib/browser-check.js';

const { addBooks } = await import(source('01-insert-once.js'));
const list = document.querySelector('#books');

// A MutationObserver (a later lecture in this section) counts how often the list changes.
const observer = new MutationObserver(() => {});
observer.observe(list, { childList: true });

check('the new books are added at the end of the list', () => {
    addBooks(list, ['Ulysses', 'Persuasion', 'Neuromancer']);
    observer.takeRecords();
    const titles = Array.from(list.children, (row) => row.textContent);
    deepEqual(titles, ['Dune', 'Emma', 'Ulysses', 'Persuasion', 'Neuromancer']);
});

check('three books change the list only once', () => {
    addBooks(list, ['Emma', 'Dracula', 'Beloved']);
    equal(observer.takeRecords().length, 1);
});

check('a title with markup shows up as plain text', () => {
    addBooks(list, ['<b>Dune</b>']);
    observer.takeRecords();
    equal(list.querySelector('b'), null);
    equal(list.lastElementChild.textContent, '<b>Dune</b>');
});

check('an empty array adds no rows', () => {
    const before = list.children.length;
    addBooks(list, []);
    observer.takeRecords();
    equal(list.children.length, before);
});
