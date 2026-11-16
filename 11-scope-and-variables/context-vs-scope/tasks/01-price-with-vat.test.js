import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { priceWithVat, createProduct } = await import(
    process.env.SOLUTIONS ? '../solutions/01-price-with-vat.js' : './01-price-with-vat.js'
);

test('adds 20% VAT to the price of the product', () => {
    assert.equal(createProduct('Hat', 15).priceWithVat(), 18);
});

test('two products share one function but get their own price', () => {
    const hat = createProduct('Hat', 15);
    const book = createProduct('Book', 30);
    assert.equal(hat.priceWithVat, book.priceWithVat);
    assert.equal(book.priceWithVat(), 36);
    assert.equal(hat.priceWithVat(), 18);
});

test('a changed price gives the new result', () => {
    const lamp = createProduct('Lamp', 40);
    lamp.price = 50;
    assert.equal(lamp.priceWithVat(), 60);
});

test('works on any object it is called on', () => {
    const giftBox = { price: 10, priceWithVat };
    assert.equal(giftBox.priceWithVat(), 12);
});

test('a free product stays free', () => {
    assert.equal(createProduct('Sticker', 0).priceWithVat(), 0);
});
