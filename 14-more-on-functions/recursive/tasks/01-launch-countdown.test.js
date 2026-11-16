import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { launchCountdown } = await import(
    process.env.SOLUTIONS ? '../solutions/01-launch-countdown.js' : './01-launch-countdown.js'
);

test('counts down from a whole number to Go!', () => {
    assert.equal(launchCountdown(3), '3, 2, 1, Go!');
});

test('from 0 it is only Go!', () => {
    assert.equal(launchCountdown(0), 'Go!');
});

test('a negative number does not overflow the stack', () => {
    assert.equal(launchCountdown(-1), 'Go!');
});

test('a decimal number stops below 0 too', () => {
    assert.equal(launchCountdown(1.5), '1.5, 0.5, Go!');
});
