import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { brighten } = await import(
    process.env.SOLUTIONS ? '../solutions/02-brighten-pixels.js' : './02-brighten-pixels.js'
);

test('values that stay in range are raised by the amount', () => {
    const result = brighten(new Uint8Array([10, 100, 200]), 20);
    assert.deepEqual([...result], [30, 120, 220]);
});

test('values past 255 stop at 255 instead of wrapping around', () => {
    const result = brighten(new Uint8Array([240, 250, 255]), 20);
    assert.deepEqual([...result], [255, 255, 255]);
});

test('a negative amount darkens, and values stop at 0', () => {
    const result = brighten(new Uint8Array([10, 200, 0]), -20);
    assert.deepEqual([...result], [0, 180, 0]);
});

test('the result is a new Uint8Array of the same length', () => {
    const pixels = new Uint8Array([1, 2, 3, 4]);
    const result = brighten(pixels, 5);
    assert.ok(result instanceof Uint8Array);
    assert.equal(result.length, 4);
    assert.notEqual(result, pixels);
});

test('the pixels we pass in do not change', () => {
    const pixels = new Uint8Array([10, 250]);
    brighten(pixels, 20);
    assert.deepEqual([...pixels], [10, 250]);
});
