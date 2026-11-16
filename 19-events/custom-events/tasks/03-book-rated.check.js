import { check, deepEqual, equal, source } from '/lib/browser-check.js';

const { setUpRating, showLastRating } = await import(source('03-book-rated.js'));

const list = document.querySelector('#books');
const output = document.querySelector('#last-rating');
for (const rating of list.querySelectorAll('.rating')) {
    setUpRating(rating);
}
showLastRating(list, output);

// Our own listener on the widget, to read the event itself.
const dune = list.querySelector('[data-key="dune"]');
let lastEvent = null;
dune.querySelector('.rating').addEventListener('book:rated', (event) => {
    lastEvent = event;
});

check('the widget dispatches book:rated with the key and the stars', () => {
    dune.querySelector('[data-stars="3"]').click();
    deepEqual(lastEvent?.detail, { key: 'dune', stars: 3 });
});

check('the event bubbles', () => {
    equal(lastEvent?.bubbles, true);
});

check('the page shows the rating of Dune', () => {
    equal(output.textContent, 'dune: 3 stars');
});

check('a rating of Emma reaches the page too', () => {
    list.querySelector('[data-key="emma"] [data-stars="1"]').click();
    equal(output.textContent, 'emma: 1 star');
});
