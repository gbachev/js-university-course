import { describe, expect, it } from 'vitest';
import { filterOrders, totalCents } from '../src/orders.js';

const orders = [
    { id: 1, status: 'paid', amountCents: 2500 },
    { id: 2, status: 'shipped', amountCents: 4000 },
    { id: 3, status: 'paid', amountCents: 1550 },
];

describe('filterOrders', () => {
    it('keeps only the orders with the status', () => {
        const paid = filterOrders(orders, 'paid');
        expect(paid.map((order) => order.id)).toEqual([1, 3]);
    });

    it('gives an empty list when nothing matches', () => {
        expect(filterOrders(orders, 'cancelled')).toEqual([]);
    });
});

describe('totalCents', () => {
    it('adds up the amounts', () => {
        expect(totalCents(orders)).toBe(8050);
    });

    it('is 0 for no orders', () => {
        expect(totalCents([])).toBe(0);
    });
});
