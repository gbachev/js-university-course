import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { checkStock } = await import(
    process.env.SOLUTIONS ? '../solutions/03-check-the-stock.js' : './03-check-the-stock.js'
);

// Replaces console.assert() and keeps the messages of the assertions that fail.
function watchAsserts(t) {
    const failed = [];
    const spy = t.mock.method(console, 'assert', (condition, message) => {
        if (!condition) {
            failed.push(message);
        }
    });
    return { failed, spy };
}

test('a product with a negative stock fails its assertion', (t) => {
    const { failed } = watchAsserts(t);
    const products = [
        { title: 'Mouse', stock: -2 },
        { title: 'Keyboard', stock: 5 }
    ];
    assert.equal(checkStock(products), 1);
    assert.deepEqual(failed, ['Mouse has negative stock']);
});

test('console.assert() is called once for every product', (t) => {
    const { spy } = watchAsserts(t);
    checkStock([
        { title: 'Mouse', stock: 3 },
        { title: 'Keyboard', stock: 5 },
        { title: 'Monitor', stock: 1 }
    ]);
    assert.equal(spy.mock.callCount(), 3);
});

test('a stock of 0 is fine', (t) => {
    const { failed } = watchAsserts(t);
    assert.equal(checkStock([{ title: 'Webcam', stock: 0 }]), 0);
    assert.deepEqual(failed, []);
});

test('every negative stock is counted', (t) => {
    const { failed } = watchAsserts(t);
    const products = [
        { title: 'Mouse', stock: -1 },
        { title: 'Cable', stock: 4 },
        { title: 'Charger', stock: -7 }
    ];
    assert.equal(checkStock(products), 2);
    assert.deepEqual(failed, ['Mouse has negative stock', 'Charger has negative stock']);
});

test('an empty list has nothing to count', (t) => {
    watchAsserts(t);
    assert.equal(checkStock([]), 0);
});
