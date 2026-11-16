import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { invoiceNumbers } = await import(
    process.env.SOLUTIONS ? '../solutions/01-invoice-numbers.js' : './01-invoice-numbers.js'
);

test('yields numbers from 1, padded to four digits', () => {
    const numbers = invoiceNumbers(2026);
    assert.equal(numbers.next().value, 'INV-2026-0001');
    assert.equal(numbers.next().value, 'INV-2026-0002');
    assert.equal(numbers.next().value, 'INV-2026-0003');
});

test('starts at start when we pass it', () => {
    assert.deepEqual(invoiceNumbers(2027, 41).take(2).toArray(), [
        'INV-2027-0041',
        'INV-2027-0042',
    ]);
});

test('never ends', () => {
    const numbers = invoiceNumbers(2026);
    let result;
    for (let i = 0; i < 12000; i++) {
        result = numbers.next();
    }
    assert.deepEqual(result, { value: 'INV-2026-12000', done: false });
});

test('every call gives an independent sequence', () => {
    const first = invoiceNumbers(2026);
    const second = invoiceNumbers(2026);
    first.next();
    first.next();
    assert.equal(second.next().value, 'INV-2026-0001');
});

test('works in a for...of loop with a break', () => {
    const seen = [];
    for (const number of invoiceNumbers(2026, 9)) {
        seen.push(number);
        if (seen.length === 2) break;
    }
    assert.deepEqual(seen, ['INV-2026-0009', 'INV-2026-0010']);
});
