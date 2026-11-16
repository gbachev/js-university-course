import { check, deepEqual, source } from '/lib/browser-check.js';

const { saleNames } = await import(source('02-names-on-sale.js'));
const onSale = [...document.querySelectorAll('.sale')];

check('we get the names of the two products on sale', () => {
    deepEqual(saleNames(), ['Eloquent JavaScript', 'JavaScript: The Good Parts']);
});

check('a product that leaves the sale is no longer in the list', () => {
    onSale[0].classList.remove('sale');
    try {
        deepEqual(saleNames(), ['JavaScript: The Good Parts']);
    } finally {
        onSale[0].classList.add('sale');
    }
});

check('without products on sale we get an empty array', () => {
    onSale.forEach((product) => product.classList.remove('sale'));
    try {
        deepEqual(saleNames(), []);
    } finally {
        onSale.forEach((product) => product.classList.add('sale'));
    }
});
