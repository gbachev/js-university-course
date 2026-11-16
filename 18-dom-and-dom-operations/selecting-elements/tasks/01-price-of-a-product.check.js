import { check, equal, source } from '/lib/browser-check.js';

const { priceOf } = await import(source('01-price-of-a-product.js'));

check('Clean Code (101) costs 32.5', () => {
    equal(priceOf(101), 32.5);
});

check('the price is a number, not a string', () => {
    equal(priceOf(102), 28);
    equal(priceOf(104) + 0.1, 20);
});

check('the product id also works as a string', () => {
    equal(priceOf('103'), 41);
});

check('an unknown product gives null instead of an error', () => {
    equal(priceOf(999), null);
});
