import { check, source, equal, deepEqual } from '/lib/browser-check.js';

const { renderNames } = await import(source('04-render-names.js'));
const list = document.querySelector('#team');
const texts = () => [...list.querySelectorAll('li')].map((item) => item.textContent);

check('two names become two items, in order', () => {
    list.replaceChildren();
    equal(renderNames(['Ada', 'Linus'], list), 2);
    deepEqual(texts(), ['Ada', 'Linus']);
});

check('an empty array adds nothing', () => {
    list.replaceChildren();
    equal(renderNames([], list), 0);
    equal(list.children.length, 0);
});

check('a name with markup shows as text', () => {
    list.replaceChildren();
    renderNames(['<b>Max</b>'], list);
    equal(list.querySelector('b'), null, 'the name should not create a <b> element');
    deepEqual(texts(), ['<b>Max</b>']);
});

check('the page shows the team at the end', () => {
    list.replaceChildren();
    renderNames(['Ada', 'Grace', 'Linus'], list);
    equal(list.children.length, 3);
});
