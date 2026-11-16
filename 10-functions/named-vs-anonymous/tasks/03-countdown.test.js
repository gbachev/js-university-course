import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { countdown } = await import(
    process.env.SOLUTIONS ? '../solutions/03-countdown.js' : './03-countdown.js'
);

test('the seconds go down to 1 and then Go!', () => {
    assert.deepEqual(countdown(3), [3, 2, 1, 'Go!']);
});

test('one second gives 1 and Go!', () => {
    assert.deepEqual(countdown(1), [1, 'Go!']);
});

test('0 seconds give only Go!', () => {
    assert.deepEqual(countdown(0), ['Go!']);
});

test('a longer countdown has every second in it', () => {
    assert.deepEqual(countdown(5), [5, 4, 3, 2, 1, 'Go!']);
});
