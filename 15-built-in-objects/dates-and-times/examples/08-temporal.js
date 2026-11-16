// A monthly renewal from 31 January: Date rolls over, Temporal stops at the month's end.
const renewal = new Date(2026, 0, 31); // January 31
renewal.setMonth(renewal.getMonth() + 1);
console.log(renewal.getMonth(), renewal.getDate()); // 2 3 (March 3)

// Temporal ships in Chrome, Edge, Firefox and Node.js 26+,
// not yet in Safari or Node.js 22 and 24.
if (typeof Temporal === 'undefined') {
    console.log('Temporal is not available in this runtime yet.');
} else {
    const start = Temporal.PlainDate.from('2026-01-31');
    console.log(start.add({ months: 1 }).toString()); // 2026-02-28
    console.log(start.month); // 1
}
