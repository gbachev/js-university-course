import { check, deepEqual, equal, ok, source } from '/lib/browser-check.js';

const { BookItem } = await import(source('01-book-item.js'));
const list = document.querySelector('#books');

const dune = { key: 'dune', title: 'Dune', author: 'Frank Herbert', read: true };
const emma = { key: 'emma', title: 'Emma', author: 'Jane Austen', read: false };
const noAuthor = { key: 'notes', title: 'My notes', read: false };

// Each check draws its own row and shows it in the list on the page.
function draw(book, onRemove = () => {}) {
    const row = BookItem({ book, onRemove });
    list.append(row);
    return row;
}

await check('BookItem returns an li', () => {
    const row = draw(dune);
    ok(row instanceof HTMLLIElement, 'BookItem should return an li element');
});

await check('the row shows the title and "by" the author', () => {
    const row = draw(emma);
    equal(row.querySelector('.title').textContent, 'Emma');
    equal(row.querySelector('.author').textContent, 'by Jane Austen');
});

await check('a read book has the class is-read, an unread one does not', () => {
    ok(draw(dune).classList.contains('is-read'), 'Dune is read');
    ok(!draw(emma).classList.contains('is-read'), 'Emma is not read');
});

await check('a book without an author has no author span', () => {
    const row = draw(noAuthor);
    equal(row.querySelector('.author'), null);
    equal(row.querySelector('.title').textContent, 'My notes');
});

await check('the button says Remove', () => {
    equal(draw(emma).querySelector('button').textContent, 'Remove');
});

await check('the Remove button calls onRemove with the book key', () => {
    const removed = [];
    const row = draw(dune, (key) => removed.push(key));
    const button = row.querySelector('button');
    equal(button.type, 'button');
    equal(button.getAttribute('aria-label'), 'Remove Dune');
    button.click();
    deepEqual(removed, ['dune']);
});

await check('a title with HTML in it shows as text', () => {
    const row = draw({ key: 'x', title: '<b>Bold</b> title', read: false });
    equal(row.querySelector('b'), null);
    equal(row.querySelector('.title').textContent, '<b>Bold</b> title');
});

await check('the component does not change the book', () => {
    const book = { ...emma };
    draw(book).querySelector('button').click();
    deepEqual(book, emma);
});
