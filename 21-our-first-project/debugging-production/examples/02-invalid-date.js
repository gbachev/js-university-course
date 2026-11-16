// Why the imagined 1.1.0 broke: a book saved by 1.0.0 has no addedAt.
const added = new Date(Date.UTC(2026, 10, 14));
console.log(added.toISOString().slice(0, 10)); // 2026-11-14

const missing = new Date(undefined);
console.log(String(missing)); // Invalid Date
console.log(Number.isNaN(missing.getTime())); // true

try {
    missing.toISOString();
} catch (error) {
    console.log(error.name + ': ' + error.message); // RangeError: Invalid time value
}
