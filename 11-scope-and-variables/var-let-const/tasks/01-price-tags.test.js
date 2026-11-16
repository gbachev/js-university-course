import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createPriceTags } = await import(
    process.env.SOLUTIONS ? '../solutions/01-price-tags.js' : './01-price-tags.js'
);

test('we get one function for each price', () => {
    assert.equal(createPriceTags([12.5, 3, 99.99]).length, 3);
});

test('each function returns the tag of its own price', () => {
    const tags = createPriceTags([12.5, 3, 99.99]);
    assert.equal(tags[0](), '$12.50');
    assert.equal(tags[1](), '$3.00');
    assert.equal(tags[2](), '$99.99');
});

test('a function returns the same tag every time we call it', () => {
    const tags = createPriceTags([5]);
    assert.equal(tags[0](), '$5.00');
    assert.equal(tags[0](), '$5.00');
});

test('no prices give no functions', () => {
    assert.deepEqual(createPriceTags([]), []);
});
