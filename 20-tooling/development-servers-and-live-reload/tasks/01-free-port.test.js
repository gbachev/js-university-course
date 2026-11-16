import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { nextFreePort } = await import(
    process.env.SOLUTIONS ? '../solutions/01-free-port.js' : './01-free-port.js'
);

test('a free port is used as it is', () => {
    assert.equal(nextFreePort(5173, []), 5173);
    assert.equal(nextFreePort(4173, [5173]), 4173);
});

test('a taken port moves on to the next one', () => {
    assert.equal(nextFreePort(5173, [5173]), 5174);
});

test('several taken ports in a row are skipped', () => {
    assert.equal(nextFreePort(5173, [5173, 5174, 5175]), 5176);
});

test('the order of the taken ports does not matter', () => {
    assert.equal(nextFreePort(5173, [5175, 5173, 5174]), 5176);
});

test('a gap is used before the ports after it', () => {
    assert.equal(nextFreePort(5173, [5173, 5175]), 5174);
});
