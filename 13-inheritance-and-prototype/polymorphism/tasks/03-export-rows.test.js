import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { exportRows } = await import(
    process.env.SOLUTIONS ? '../solutions/03-export-rows.js' : './03-export-rows.js'
);

class Order {
    constructor(id, total) {
        this.id = id;
        this.total = total;
    }

    toRow() {
        return `order,${this.id},${this.total}`;
    }
}

function customer(name) {
    return { toRow: () => `customer,${name}` };
}

test('exports a class instance, a factory object and a literal', () => {
    const refund = { toRow() { return 'refund,7'; } };
    assert.deepEqual(exportRows([new Order(42, 99.5), customer('Jane Doe'), refund]), [
        'order,42,99.5',
        'customer,Jane Doe',
        'refund,7'
    ]);
});

test('skips items without a toRow method', () => {
    const note = { text: 'Call back' };
    assert.deepEqual(exportRows([note, new Order(43, 12)]), ['order,43,12']);
});

test('skips an item whose toRow is not a function', () => {
    assert.deepEqual(exportRows([{ toRow: 'order,1' }, customer('John Doe')]), [
        'customer,John Doe'
    ]);
});

test('an empty report gives no rows', () => {
    assert.deepEqual(exportRows([]), []);
});
