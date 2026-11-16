import { check, deepEqual, equal, source } from '/lib/browser-check.js';

const { setUpForm } = await import(source('01-add-book-form.js'));

const form = document.querySelector('#add-book');
const list = document.querySelector('#books');
const { title, shelf, tags } = form.elements;
setUpForm(form, list);

function books() {
    return [...list.children].map((book) => ({
        title: book.textContent,
        shelf: book.dataset.shelf,
        tags: book.dataset.tags,
    }));
}

check('an empty title does not add a book', () => {
    form.requestSubmit();
    deepEqual(books(), []);
});

check('a submit adds the book with its shelf and tag', () => {
    title.value = ' Dune ';
    shelf.value = 'reading';
    tags[1].checked = true;
    form.requestSubmit();
    deepEqual(books(), [{ title: 'Dune', shelf: 'reading', tags: 'sci-fi' }]);
});

check('the form is empty again after a submit', () => {
    equal(title.value, '');
    equal(shelf.value, 'to-read');
    equal(tags[1].checked, false);
});

check('two checked tags are both kept', () => {
    title.value = 'Neuromancer';
    tags[0].checked = true;
    tags[1].checked = true;
    form.requestSubmit();
    deepEqual(books()[1], { title: 'Neuromancer', shelf: 'to-read', tags: 'classic,sci-fi' });
});

check('a book without tags gets an empty data-tags', () => {
    title.value = 'Emma';
    form.requestSubmit();
    deepEqual(books()[2], { title: 'Emma', shelf: 'to-read', tags: '' });
});
