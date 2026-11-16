// A Date holds one number: the milliseconds since the Unix epoch.
const epoch = new Date(0);
console.log(epoch.toISOString()); // 1970-01-01T00:00:00.000Z

const launch = new Date('2026-03-01T09:30:00Z');
console.log(launch.getTime()); // 1772357400000
console.log(typeof launch.getTime()); // number
