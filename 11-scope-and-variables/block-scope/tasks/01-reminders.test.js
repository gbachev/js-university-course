import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { scheduleReminders } = await import(
    process.env.SOLUTIONS ? '../solutions/01-reminders.js' : './01-reminders.js'
);

// The tests use fake timers, so they move the clock forward instead of waiting.
// Node 22 prints an ExperimentalWarning for these MockTimers. It is harmless.
function schedule(t, tasks) {
    const sent = [];
    t.mock.timers.enable({ apis: ['setTimeout'] });
    scheduleReminders(tasks, (task) => sent.push(task));
    return sent;
}

test('every task is sent to notify, in order', (t) => {
    const sent = schedule(t, ['Pay rent', 'Call mom', 'Buy milk']);
    t.mock.timers.tick(3000);
    assert.deepEqual(sent, ['Pay rent', 'Call mom', 'Buy milk']);
});

test('the first task comes after one second', (t) => {
    const sent = schedule(t, ['Pay rent', 'Call mom']);
    t.mock.timers.tick(999);
    assert.deepEqual(sent, []);
    t.mock.timers.tick(1);
    assert.deepEqual(sent, ['Pay rent']);
});

test('each next task comes one second later', (t) => {
    const sent = schedule(t, ['Pay rent', 'Call mom']);
    t.mock.timers.tick(1999);
    assert.deepEqual(sent, ['Pay rent']);
    t.mock.timers.tick(1);
    assert.deepEqual(sent, ['Pay rent', 'Call mom']);
});

test('an empty list sends nothing', (t) => {
    const sent = schedule(t, []);
    t.mock.timers.tick(5000);
    assert.deepEqual(sent, []);
});
