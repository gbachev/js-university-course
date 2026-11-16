// The local-time output below is for Europe/Sofia. We set the time zone here, so
// the file prints the same on every machine. Remove the line to see your own.
process.env.TZ = 'Europe/Sofia';

// A date-only ISO string is read as UTC, a date and time without an offset as local time.
const dateOnly = new Date('2026-03-01');
const noOffset = new Date('2026-03-01T00:00');

console.log(dateOnly.toISOString()); // 2026-03-01T00:00:00.000Z
console.log(noOffset.toISOString());
// 2026-02-28T22:00:00.000Z (in Europe/Sofia)

// Any other format is up to the engine.
const typed = new Date('01.03.2026'); // a user meant 1 March
console.log(typed.getMonth(), typed.getDate()); // 0 3 (Chrome, Node)

function isValidDate(date) {
    return !Number.isNaN(date.getTime());
}

console.log(isValidDate(new Date('2026-03-01'))); // true
console.log(isValidDate(new Date('not a date'))); // false

// An Invalid Date has the timestamp NaN, and toISOString() on it throws.
try {
    new Date('not a date').toISOString();
} catch (error) {
    console.log(error.name + ': ' + error.message); // RangeError: Invalid time value
}
