// The local-time output below is for Europe/Sofia. We set the time zone here, so
// the file prints the same on every machine. Remove the line to see your own.
process.env.TZ = 'Europe/Sofia';

// get* reads local time, getUTC* and toISOString() read UTC.
const call = new Date('2026-03-01T22:30:00Z');

console.log(call.toISOString()); // 2026-03-01T22:30:00.000Z
console.log(call.getUTCDate(), call.getUTCHours()); // 1 22
console.log(call.getDate(), call.getHours()); // 2 0 (in Europe/Sofia)
console.log(call.getTimezoneOffset()); // -120 (in Europe/Sofia)
const options = { timeZone: 'UTC' };
console.log(call.toLocaleDateString('en-US', options)); // 3/1/2026
