import { check, deepEqual, equal, ok, source } from '/lib/browser-check.js';

const { renderBooks } = await import(source('01-render-from-a-template.js'));
const list = document.querySelector('#books');
const template = document.querySelector('#book-row');
const books = [
    { title: 'Persuasion', author: 'Jane Austen' },
    { title: 'Neuromancer', author: 'William Gibson' },
];

const rowTexts = () =>
    Array.from(list.children, (row) => row.textContent.replace(/\s+/g, ' ').trim());

check('every book gets a row, and the Loading... row is gone', () => {
    renderBooks(list, template, books);
    deepEqual(rowTexts(), ['Persuasion by Jane Austen', 'Neuromancer by William Gibson']);
});

check('the rows come from the template', () => {
    renderBooks(list, template, books);
    ok(list.firstElementChild.matches('li.book'), 'the row should be an li.book');
    equal(list.firstElementChild.querySelector('.author').textContent, 'Jane Austen');
});

check('calling it twice does not show the books twice', () => {
    renderBooks(list, template, books);
    renderBooks(list, template, books);
    equal(list.children.length, 2);
});

check('a title with markup shows up as plain text', () => {
    renderBooks(list, template, [{ title: '<b>Dune</b>', author: 'Frank Herbert' }]);
    equal(list.querySelector('b'), null, 'the title turned into a real b element');
    ok(list.querySelector('.title'), 'there is no .title in the list: fill the template');
    equal(list.querySelector('.title').textContent, '<b>Dune</b>');
});

check('the template itself stays empty', () => {
    equal(template.content.querySelector('.title').textContent, '');
    renderBooks(list, template, books);
});
