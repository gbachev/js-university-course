import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { product, book, ebook } = await import(
    process.env.SOLUTIONS ? '../solutions/01-build-the-chain.js' : './01-build-the-chain.js'
);

test('the ebook links to the book', () => {
    assert.equal(Object.getPrototypeOf(ebook), book);
});

test('the book links to the product', () => {
    assert.equal(Object.getPrototypeOf(book), product);
});

test('the ebook describes itself with a method two links up', () => {
    assert.equal(ebook.describe(), 'Dune - 9.99 EUR');
});

test('the ebook gets its byline from the book', () => {
    assert.equal(ebook.byline(), 'Dune by Frank Herbert');
});

test('the ebook keeps only its own data', () => {
    assert.deepEqual(Object.keys(ebook).sort(), ['author', 'price', 'title']);
    assert.equal(Object.hasOwn(ebook, 'describe'), false);
});
