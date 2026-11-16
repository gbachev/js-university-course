import { check, deepEqual, source } from '/lib/browser-check.js';

const { setUpSearch } = await import(source('02-live-search.js'));

const input = document.querySelector('#search');
const list = document.querySelector('#books');
setUpSearch(input, list);

function type(text) {
    input.value = text;
    input.dispatchEvent(new Event('input', { bubbles: true }));
}

function pressKey(key) {
    input.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));
}

function shown() {
    return [...list.children].filter((book) => !book.hidden).map((book) => book.textContent);
}

check('typing "du" shows only Dune', () => {
    type('du');
    deepEqual(shown(), ['Dune']);
});

check('upper or lower case does not matter', () => {
    type('MA');
    deepEqual(shown(), ['Emma', 'Neuromancer']);
});

check('a title nobody has hides every book', () => {
    type('xyz');
    deepEqual(shown(), []);
});

check('Escape empties the box and shows every book', () => {
    pressKey('Escape');
    deepEqual(input.value, '');
    deepEqual(shown(), ['Dune', 'Emma', 'Neuromancer', 'Persuasion']);
});

check('other keys leave the search alone', () => {
    type('per');
    pressKey('a');
    deepEqual(input.value, 'per');
    deepEqual(shown(), ['Persuasion']);
});
