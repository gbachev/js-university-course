import { check, equal, ok, source } from '/lib/browser-check.js';

const { addBooks } = await import(source('03-keep-the-rows.js'));
const list = document.querySelector('#books');
const dune = list.firstElementChild;
dune.querySelector('input').checked = true;

check('addBooks runs without an error', () => {
    addBooks(list, ['Persuasion', 'Neuromancer']);
});

check('the new books are at the end of the list', () => {
    equal(list.children.length, 4);
    equal(list.lastElementChild.textContent.trim(), 'Neuromancer');
});

check('every new row has a checkbox', () => {
    equal(list.querySelectorAll('input[type="checkbox"]').length, 4);
});

check('the rows already on the page are the same elements', () => {
    ok(dune.isConnected, 'the Dune row was replaced by a copy');
});

check('a ticked checkbox stays ticked', () => {
    ok(list.querySelector('input').checked, 'the Dune checkbox lost its tick');
});

check('a title with markup shows up as plain text', () => {
    const title = `<img src="x" onerror="console.log('hacked')">`;
    addBooks(list, [title]);
    equal(list.querySelector('img'), null, 'the title turned into a real img element');
    equal(list.lastElementChild.textContent.trim(), title);
});
