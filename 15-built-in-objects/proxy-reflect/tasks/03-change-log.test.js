import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { withChangeLog } = await import(
    process.env.SOLUTIONS ? '../solutions/03-change-log.js' : './03-change-log.js'
);

test('a change is stored and logged with the old and the new value', () => {
    const log = [];
    const original = { status: 'new', total: 40 };
    const order = withChangeLog(original, log);
    order.status = 'paid';
    assert.equal(original.status, 'paid');
    assert.deepEqual(log, [{ key: 'status', from: 'new', to: 'paid' }]);
});

test('changes are logged in the order they happen', () => {
    const log = [];
    const order = withChangeLog({ status: 'new', total: 40 }, log);
    order.status = 'paid';
    order.total = 35;
    order.status = 'shipped';
    assert.deepEqual(log, [
        { key: 'status', from: 'new', to: 'paid' },
        { key: 'total', from: 40, to: 35 },
        { key: 'status', from: 'paid', to: 'shipped' },
    ]);
});

test('writing the same value adds nothing', () => {
    const log = [];
    const order = withChangeLog({ status: 'new', total: 40 }, log);
    order.total = 40;
    order.status = 'new';
    assert.deepEqual(log, []);
});

test('writing NaN over NaN adds nothing', () => {
    const log = [];
    const order = withChangeLog({ status: 'new', total: NaN }, log);
    order.total = NaN;
    assert.deepEqual(log, []);
});

test('a new key is logged with undefined as the old value', () => {
    const log = [];
    const order = withChangeLog({ status: 'new' }, log);
    order.coupon = 'WINTER10';
    assert.deepEqual(log, [{ key: 'coupon', from: undefined, to: 'WINTER10' }]);
});

test('a write to a read-only property throws and is not logged', () => {
    const log = [];
    const original = { status: 'new' };
    Object.defineProperty(original, 'id', { value: 1001, writable: false });
    const order = withChangeLog(original, log);
    assert.equal(order.id, 1001);
    assert.throws(() => {
        order.id = 2002;
    }, TypeError);
    assert.equal(original.id, 1001);
    assert.deepEqual(log, []);
});
