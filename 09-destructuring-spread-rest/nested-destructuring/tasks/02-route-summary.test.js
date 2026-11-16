import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getRouteSummary } = await import(
    process.env.SOLUTIONS ? '../solutions/02-route-summary.js' : './02-route-summary.js'
);

test('the summary has the driver, the first stop, its time and the second city', () => {
    const route = {
        driver: 'Ana',
        stops: [
            ['Sofia', '09:00'],
            ['Plovdiv', '11:30'],
        ],
    };

    assert.equal(
        getRouteSummary(route),
        'Ana starts in Sofia at 09:00 and ends in Plovdiv'
    );
});

test('another driver on another route', () => {
    const route = {
        id: 'R-17',
        driver: 'Ben',
        stops: [
            ['Varna', '07:15'],
            ['Burgas', '09:45'],
        ],
    };

    assert.equal(
        getRouteSummary(route),
        'Ben starts in Varna at 07:15 and ends in Burgas'
    );
});

test('extra details in a stop do not change the summary', () => {
    const route = {
        driver: 'Iva',
        stops: [
            ['Ruse', '08:00', 'Depot'],
            ['Pleven', '10:15', 'Shop 4'],
        ],
    };

    assert.equal(
        getRouteSummary(route),
        'Iva starts in Ruse at 08:00 and ends in Pleven'
    );
});
