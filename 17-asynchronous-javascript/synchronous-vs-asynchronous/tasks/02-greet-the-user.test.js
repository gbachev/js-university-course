import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { greetUser } = await import(
    process.env.SOLUTIONS ? '../solutions/02-greet-the-user.js' : './02-greet-the-user.js'
);

// The tests use fake timers, so they move the clock forward instead of waiting.
// Node 22 prints an ExperimentalWarning for these MockTimers. It is harmless.

test('the greeting has the name of the user', (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const greetings = [];
    greetUser(1, (text) => greetings.push(text));
    t.mock.timers.tick(500);
    assert.deepEqual(greetings, ['Hello, Jane Doe!']);
});

test('the greeting comes only when the user has loaded', (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const greetings = [];
    greetUser(2, (text) => greetings.push(text));
    t.mock.timers.tick(499);
    assert.deepEqual(greetings, []);
    t.mock.timers.tick(1);
    assert.deepEqual(greetings, ['Hello, John Doe!']);
});

test('an unknown user is greeted as guest', (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const greetings = [];
    greetUser(99, (text) => greetings.push(text));
    t.mock.timers.tick(500);
    assert.deepEqual(greetings, ['Hello, guest!']);
});

test('onGreeting is called once per call', (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const greetings = [];
    greetUser(1, (text) => greetings.push(text));
    t.mock.timers.tick(2000);
    assert.equal(greetings.length, 1);
});
