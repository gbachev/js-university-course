import { check, deepEqual, equal, source } from '/lib/browser-check.js';

const { setUpCart } = await import(source('02-cart-actions.js'));

const list = document.querySelector('#cart');
const total = document.querySelector('#total');
setUpCart(list, total);

function quantityOf(key) {
    return list.querySelector(`[data-key="${key}"] .quantity`).textContent;
}

function press(key, action) {
    list.querySelector(`[data-key="${key}"] [data-action="${action}"]`).click();
}

check('"+" adds one to the quantity and updates the total', () => {
    press('mug', 'increase');
    equal(quantityOf('mug'), '2');
    equal(total.textContent, '33.40');
});

check('"-" takes one away', () => {
    press('notebook', 'decrease');
    equal(quantityOf('notebook'), '1');
    equal(total.textContent, '29.20');
});

check('"-" never goes below 1', () => {
    press('notebook', 'decrease');
    equal(quantityOf('notebook'), '1');
    equal(total.textContent, '29.20');
});

check('"Remove" removes the row and updates the total', () => {
    press('mug', 'remove');
    deepEqual([...list.children].map((row) => row.dataset.key), ['notebook']);
    equal(total.textContent, '4.20');
});

check('a click on the cart itself changes nothing and throws nothing', () => {
    const errors = [];
    const onError = (event) => errors.push(event.message);
    window.addEventListener('error', onError);
    list.click();
    window.removeEventListener('error', onError);
    deepEqual(errors, []);
    equal(quantityOf('notebook'), '1');
    equal(total.textContent, '4.20');
});
