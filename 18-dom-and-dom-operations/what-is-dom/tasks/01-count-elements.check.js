import { check, equal, source } from '/lib/browser-check.js';

const { countElements } = await import(source('01-count-elements.js'));
const list = document.querySelector('#to-read');

check('the reading list has 3 elements among its 9 child nodes', () => {
    equal(list.childNodes.length, 9);
    equal(countElements(list), 3);
});

check('an empty list has no elements', () => {
    equal(countElements(document.createElement('ul')), 0);
});

check('text and comment nodes do not count', () => {
    const box = document.createElement('div');
    box.append('just text', document.createComment('a note'));
    equal(countElements(box), 0);
});

check('the list does not change', () => {
    countElements(list);
    equal(list.childNodes.length, 9);
});
