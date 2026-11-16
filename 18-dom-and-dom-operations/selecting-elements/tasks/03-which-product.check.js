import { check, deepEqual, equal, source } from '/lib/browser-check.js';

const { productIdOf } = await import(source('03-which-product.js'));

check('a button right inside its product gives the product id', () => {
    equal(productIdOf(document.querySelector('[data-product-id="102"] button')), '102');
});

check('a button inside a div of its product gives the product id', () => {
    equal(productIdOf(document.querySelector('[data-product-id="103"] button')), '103');
});

check('every Add button finds its product', () => {
    const ids = Array.from(document.querySelectorAll('[data-action="add"]'), productIdOf);
    deepEqual(ids, ['101', '102', '103', '104']);
});

check('a button outside the products gives null', () => {
    equal(productIdOf(document.querySelector('[data-action="subscribe"]')), null);
});
