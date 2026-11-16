import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { processOrders } = await import(
    process.env.SOLUTIONS ? '../solutions/03-let-the-click-in.js' : './03-let-the-click-in.js'
);

test('every order is handled, in order', async () => {
    const handled = [];
    await processOrders([1042, 1043, 1044], (order) => handled.push(order));
    assert.deepEqual(handled, [1042, 1043, 1044]);
});

test('a waiting click runs before the last order', async () => {
    const log = [];
    setTimeout(() => log.push('click'), 0);
    await processOrders([1, 2, 3], (order) => log.push(order));
    assert.ok(log.includes('click'), 'the click never ran during the work');
    assert.ok(log.indexOf('click') < log.indexOf(3));
});

test('the click runs right after the first order', async () => {
    const log = [];
    setTimeout(() => log.push('click'), 0);
    await processOrders([1, 2, 3], (order) => log.push(order));
    assert.deepEqual(log, [1, 'click', 2, 3]);
});

test('an empty list fulfills and handles nothing', async () => {
    const handled = [];
    await processOrders([], (order) => handled.push(order));
    assert.deepEqual(handled, []);
});
