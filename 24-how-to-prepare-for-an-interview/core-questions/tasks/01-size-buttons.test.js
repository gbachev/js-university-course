import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createSizeHandlers } = await import(
    process.env.SOLUTIONS ? '../solutions/01-size-buttons.js' : './01-size-buttons.js'
);

test('there is one handler per size', () => {
    assert.equal(createSizeHandlers([40, 41, 42]).length, 3);
});

test('each handler returns the label of its own size', () => {
    const handlers = createSizeHandlers([40, 41, 42]);
    assert.deepEqual(
        handlers.map((handler) => handler()),
        ['Size 40', 'Size 41', 'Size 42'],
    );
});

test('the first handler still returns its size after the others are made', () => {
    const handlers = createSizeHandlers([38, 39]);
    assert.equal(handlers[0](), 'Size 38');
});

test('an empty list gives no handlers', () => {
    assert.deepEqual(createSizeHandlers([]), []);
});
