import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { scheduleDelete } = await import(
    process.env.SOLUTIONS ? '../solutions/01-undo-the-delete.js' : './01-undo-the-delete.js'
);

// The tests use fake timers, so they move the clock forward instead of waiting.
// Node 22 prints an ExperimentalWarning for these MockTimers. It is harmless.

test('the order is deleted after 5 seconds', (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const deleted = [];
    scheduleDelete(1042, (id) => deleted.push(id));
    t.mock.timers.tick(4999);
    assert.deepEqual(deleted, []);
    t.mock.timers.tick(1);
    assert.deepEqual(deleted, [1042]);
});

test('scheduleDelete() returns an undo function', (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    assert.equal(typeof scheduleDelete(1042, () => {}), 'function');
});

test('undo before the 5 seconds cancels the delete', (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const deleted = [];
    const undo = scheduleDelete(1042, (id) => deleted.push(id));
    t.mock.timers.tick(2000);
    undo();
    t.mock.timers.tick(10000);
    assert.deepEqual(deleted, []);
});

test('undo cancels only its own delete', (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const deleted = [];
    const undoFirst = scheduleDelete(1, (id) => deleted.push(id));
    scheduleDelete(2, (id) => deleted.push(id));
    undoFirst();
    t.mock.timers.tick(5000);
    assert.deepEqual(deleted, [2]);
});

test('undo after the delete does nothing and does not throw', (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const deleted = [];
    const undo = scheduleDelete(1042, (id) => deleted.push(id));
    t.mock.timers.tick(5000);
    assert.doesNotThrow(() => undo());
    assert.deepEqual(deleted, [1042]);
});
