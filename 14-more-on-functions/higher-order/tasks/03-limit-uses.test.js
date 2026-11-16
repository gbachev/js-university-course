import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { limitUses } = await import(
    process.env.SOLUTIONS ? '../solutions/03-limit-uses.js' : './03-limit-uses.js'
);

test('returns the result of fn for the first max calls', () => {
    const applyCoupon = limitUses((total) => total - 5, 2);
    assert.equal(applyCoupon(40), 35);
    assert.equal(applyCoupon(20), 15);
});

test('after max calls it returns null and does not call fn', () => {
    let calls = 0;
    const applyCoupon = limitUses(() => {
        calls++;
        return 'applied';
    }, 2);
    applyCoupon();
    applyCoupon();
    assert.equal(applyCoupon(), null);
    assert.equal(applyCoupon(), null);
    assert.equal(calls, 2);
});

test('passes on all the arguments', () => {
    const add = limitUses((a, b) => a + b, 1);
    assert.equal(add(2, 3), 5);
});

test('with a max of 0 fn never runs', () => {
    let calls = 0;
    const applyCoupon = limitUses(() => calls++, 0);
    assert.equal(applyCoupon(), null);
    assert.equal(calls, 0);
});

test('each wrapper counts its own uses', () => {
    const summer = limitUses(() => 'summer', 1);
    const winter = limitUses(() => 'winter', 1);
    summer();
    assert.equal(summer(), null);
    assert.equal(winter(), 'winter');
});
