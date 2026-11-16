import { check, deepEqual, source } from '/lib/browser-check.js';

const { highlightFields } = await import(source('03-active-field.js'));

const form = document.querySelector('#add-book');
const { title, author } = form.elements;
highlightFields(form);

function activeFields() {
    const fields = form.querySelectorAll('.field.active');
    return [...fields].map((field) => field.querySelector('input').name);
}

check('focusing the title makes its field active', () => {
    title.focus();
    deepEqual(activeFields(), ['title']);
});

check('moving to the author moves the highlight', () => {
    author.focus();
    deepEqual(activeFields(), ['author']);
});

check('leaving the form removes the highlight', () => {
    author.blur();
    deepEqual(activeFields(), []);
});

check('focusing the Add button highlights nothing and throws nothing', () => {
    const errors = [];
    const onError = (event) => errors.push(event.message);
    window.addEventListener('error', onError);
    form.querySelector('button').focus();
    form.querySelector('button').blur();
    window.removeEventListener('error', onError);
    deepEqual(errors, []);
    deepEqual(activeFields(), []);
});
