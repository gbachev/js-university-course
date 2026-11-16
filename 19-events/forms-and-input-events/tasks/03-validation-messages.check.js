import { check, deepEqual, equal, source } from '/lib/browser-check.js';

const { setUpValidation } = await import(source('03-validation-messages.js'));

const form = document.querySelector('#add-book');
const list = document.querySelector('#books');
const error = document.querySelector('#error');
const title = form.elements.title;
setUpValidation(form, list, error);

function submit(text) {
    title.value = text;
    form.requestSubmit();
}

function titles() {
    return [...list.children].map((book) => book.textContent);
}

check('an empty title shows "Enter a title" and adds nothing', () => {
    submit('   ');
    equal(error.textContent, 'Enter a title');
    deepEqual(titles(), ['Dune', 'Emma']);
});

check('a title already on the list shows "Already on your list"', () => {
    submit('dune');
    equal(error.textContent, 'Already on your list');
    deepEqual(titles(), ['Dune', 'Emma']);
});

check('a title already on the list makes the field invalid', () => {
    equal(title.validity.customError, true);
});

check('a new title is added and the message goes away', () => {
    submit(' Persuasion ');
    deepEqual(titles(), ['Dune', 'Emma', 'Persuasion']);
    equal(error.textContent, '');
    equal(title.value, '');
});

check('after a new title the field is valid again', () => {
    equal(title.validity.customError, false);
});
