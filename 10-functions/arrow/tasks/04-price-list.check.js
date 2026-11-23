import { check, source, equal, deepEqual } from '/lib/browser-check.js';

const { showPrices } = await import(source('04-price-list.js'));
const list = document.querySelector('#prices');
const texts = () => [...list.querySelectorAll('li')].map((item) => item.textContent);

check('two prices become two items with two decimals', () => {
    list.replaceChildren();
    deepEqual(showPrices([4.5, 12], list), ['€4.50', '€12.00']);
    deepEqual(texts(), ['€4.50', '€12.00']);
});

check('an empty array shows nothing', () => {
    list.replaceChildren();
    deepEqual(showPrices([], list), []);
    equal(list.children.length, 0);
});

check('a price is rounded to cents', () => {
    list.replaceChildren();
    deepEqual(showPrices([0.1 + 0.2], list), ['€0.30']);
});
