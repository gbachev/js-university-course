import { check, deepEqual, source } from '/lib/browser-check.js';

const { setUpTrail } = await import(source('02-click-trail.js'));

const list = document.querySelector('#books');
const trail = document.querySelector('#trail');
const stop = setUpTrail(list, trail);

function readTrail() {
    const lines = [...trail.children].map((line) => line.textContent);
    trail.replaceChildren();
    return lines;
}

check('a click on the button: the list first, the book last', () => {
    list.querySelector('button').click();
    deepEqual(readTrail(), ['UL 1', 'BUTTON 2', 'LI 3']);
});

check('a click on the title: the list, then the book', () => {
    list.querySelector('.title').click();
    deepEqual(readTrail(), ['UL 1', 'LI 3']);
});

check('after stop(), a click adds nothing to the trail', () => {
    stop();
    list.querySelector('button').click();
    deepEqual(readTrail(), []);
});
