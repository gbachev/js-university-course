import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { addPoints } = await import(
    process.env.SOLUTIONS ? '../solutions/01-add-points.js' : './01-add-points.js'
);

test('the caller sees the new score', () => {
    const player = { name: 'Anna', score: 10 };
    addPoints(player, 5);
    assert.equal(player.score, 15);
});

test('points add up over several calls', () => {
    const player = { name: 'Ben', score: 0 };
    addPoints(player, 3);
    addPoints(player, 4);
    assert.equal(player.score, 7);
});

test('negative points take points away', () => {
    const player = { name: 'Anna', score: 10 };
    addPoints(player, -4);
    assert.equal(player.score, 6);
});

test('the other properties stay as they were', () => {
    const player = { name: 'Anna', score: 10 };
    addPoints(player, 5);
    assert.deepEqual(player, { name: 'Anna', score: 15 });
});

test('the function changes the object and returns nothing', () => {
    const player = { name: 'Anna', score: 10 };
    assert.equal(addPoints(player, 5), undefined);
});
