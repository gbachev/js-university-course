// A date for now, from a timestamp, or from an ISO string.
const now = new Date(); // the current moment
const timestamp = Date.now(); // the current moment as a number

const fromTimestamp = new Date(1772357400000);
const fromString = new Date('2026-03-01T09:30:00Z');

console.log(fromTimestamp.getTime() === fromString.getTime()); // true
console.log(typeof now, typeof timestamp); // object number
