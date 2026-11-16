import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createBatcher } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-one-render-per-batch.js'
        : './02-one-render-per-batch.js'
);

// Waits for a short timer, so every microtask and every timer before it has run.
function nextTask() {
    return new Promise((resolve) => setTimeout(resolve, 0));
}

test('createBatcher() returns a schedule function', () => {
    assert.equal(typeof createBatcher(() => {}), 'function');
});

test('three changes in a row give one render with all three', async () => {
    const renders = [];
    const schedule = createBatcher((changes) => renders.push(changes));
    schedule('add book-1');
    schedule('add book-2');
    schedule('remove pen');
    await nextTask();
    assert.deepEqual(renders, [['add book-1', 'add book-2', 'remove pen']]);
});

test('schedule() does not render right away', () => {
    const renders = [];
    const schedule = createBatcher((changes) => renders.push(changes));
    schedule('add book-1');
    assert.deepEqual(renders, []);
});

test('the render runs before a timer that was already waiting', async () => {
    const log = [];
    const schedule = createBatcher((changes) => log.push(changes));
    setTimeout(() => log.push('timer'), 0);
    schedule('add book-1');
    await nextTask();
    assert.deepEqual(log, [['add book-1'], 'timer']);
});

test('changes scheduled later start a new batch', async () => {
    const renders = [];
    const schedule = createBatcher((changes) => renders.push(changes));
    schedule('add book-1');
    await nextTask();
    schedule('add book-2');
    schedule('add book-3');
    await nextTask();
    assert.deepEqual(renders, [['add book-1'], ['add book-2', 'add book-3']]);
});
