import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { formatReceiptDate } = await import(
    process.env.SOLUTIONS ? '../solutions/02-receipt-date.js' : './02-receipt-date.js'
);

// Some runtimes put a narrow no-break space before PM: we compare ordinary spaces.
function plain(text) {
    return text.replace(/[\u00a0\u202f]/g, ' ');
}

const placedAt = new Date('2026-03-01T18:45:00Z');

test('an order in English for a customer in Sofia', () => {
    assert.equal(
        plain(formatReceiptDate(placedAt, 'en-US', 'Europe/Sofia')),
        'March 1, 2026 at 8:45 PM'
    );
});

test('the same order in German and Bulgarian', () => {
    assert.equal(
        plain(formatReceiptDate(placedAt, 'de-DE', 'Europe/Sofia')),
        '1. März 2026 um 20:45'
    );
    assert.equal(
        plain(formatReceiptDate(placedAt, 'bg-BG', 'Europe/Sofia')),
        '1 март 2026 г. в 20:45'
    );
});

test('the same order for a customer in New York', () => {
    assert.equal(
        plain(formatReceiptDate(placedAt, 'en-US', 'America/New_York')),
        'March 1, 2026 at 1:45 PM'
    );
});

test('a late order shows the next day in Sofia and the same day in UTC', () => {
    const lateOrder = new Date('2026-03-01T22:30:00Z');
    assert.equal(
        plain(formatReceiptDate(lateOrder, 'en-US', 'Europe/Sofia')),
        'March 2, 2026 at 12:30 AM'
    );
    assert.equal(
        plain(formatReceiptDate(lateOrder, 'en-US', 'UTC')),
        'March 1, 2026 at 10:30 PM'
    );
});
