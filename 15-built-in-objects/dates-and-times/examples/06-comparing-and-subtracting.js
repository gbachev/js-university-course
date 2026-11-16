// < and > compare dates, and subtracting gives milliseconds.
const orderedAt = new Date('2026-03-01T09:30:00Z');
const deliveredAt = new Date('2026-03-04T15:00:00Z');

console.log(deliveredAt > orderedAt); // true

const diffMs = deliveredAt - orderedAt;
console.log(diffMs); // 279000000

const msPerDay = 24 * 60 * 60 * 1000;
console.log(Math.floor(diffMs / msPerDay)); // 3

// === compares references, so for equality we compare timestamps.
const sameMoment = new Date('2026-03-01T09:30:00Z');
console.log(orderedAt === sameMoment); // false
console.log(orderedAt.getTime() === sameMoment.getTime()); // true
