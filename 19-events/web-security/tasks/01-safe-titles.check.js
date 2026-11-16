import { check, equal, source } from '/lib/browser-check.js';

const { addBook } = await import(source('01-safe-titles.js'));

const list = document.querySelector('#books');
const attack = '<img src="x" onerror="window.hacked = true">';

await check('a book shows its title in bold and who added it', () => {
    addBook(list, { title: 'Dune', addedBy: 'John Doe' });
    const item = list.lastElementChild;
    equal(item.querySelector('strong')?.textContent, 'Dune');
    equal(item.textContent, 'Dune added by John Doe');
});

await check('a title with HTML in it shows as text', () => {
    addBook(list, { title: attack, addedBy: 'Jane' });
    const item = list.lastElementChild;
    equal(item.querySelector('strong')?.textContent, attack);
    equal(item.querySelector('img'), null, 'expected no img element in the row');
});

await check('the code in onerror never runs', async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    equal(window.hacked, undefined, 'the onerror code ran');
});

await check('a name with HTML in it shows as text too', () => {
    addBook(list, { title: 'Emma', addedBy: '<b>Mallory</b>' });
    const item = list.lastElementChild;
    equal(item.textContent, 'Emma added by <b>Mallory</b>');
    equal(item.querySelector('b'), null, 'expected no b element in the row');
});

await check('each call adds exactly one row', () => {
    equal(list.children.length, 3);
});
