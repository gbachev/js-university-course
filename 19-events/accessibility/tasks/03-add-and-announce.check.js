import { check, equal, source } from '/lib/browser-check.js';

const { setUpAdd } = await import(source('03-add-and-announce.js'));

const form = document.querySelector('#add-book');
const list = document.querySelector('#books');
const status = document.querySelector('#status');
const input = form.elements.title;
setUpAdd(form, list, status);

check('the status is a polite live region before anything changes', () => {
    equal(status.getAttribute('aria-live'), 'polite');
    equal(status.textContent, '');
});

check('a submit adds the book with a Remove button', () => {
    input.value = ' Dune ';
    form.requestSubmit();
    equal(list.children.length, 2);
    const item = list.lastElementChild;
    equal(item.firstChild.textContent.trim(), 'Dune');
    equal(item.querySelector('button')?.textContent, 'Remove');
});

check('the new button is named "Remove Dune"', () => {
    const button = list.lastElementChild.querySelector('button');
    equal(button?.getAttribute('aria-label'), 'Remove Dune');
});

check('the status says what was added and how many books there are', () => {
    equal(status.textContent, 'Dune added, 2 books');
});

check('the form is empty again', () => {
    equal(input.value, '');
});

check('an empty title adds nothing and says so', () => {
    input.value = '   ';
    form.requestSubmit();
    equal(list.children.length, 2);
    equal(status.textContent, 'Type a title first.');
});

check('after an empty title the focus is on the title field', () => {
    equal(document.activeElement, input, 'expected the title field to have the focus');
});
