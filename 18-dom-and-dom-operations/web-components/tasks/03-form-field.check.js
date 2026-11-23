import { check, equal, source } from '/lib/browser-check.js';

await import(source('03-form-field.js'));
const form = document.querySelector('#review');
const field = form.querySelector('rating-field');
const rating = () => new FormData(form).get('rating');

check('the field starts at 0 in the form data', () => {
    equal(rating(), '0');
});

check('a new value shows up in the form data', () => {
    field.value = 4;
    equal(rating(), '4');
    equal(field.textContent, '4 of 5');
});

check('the other fields of the form are still there', () => {
    equal(new FormData(form).get('title'), 'Dune');
});

check('resetting the form sets the field back to 0', () => {
    field.value = 5;
    form.reset();
    equal(field.value, 0);
    equal(rating(), '0');
});
