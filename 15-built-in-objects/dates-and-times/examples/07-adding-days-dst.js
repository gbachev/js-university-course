// The local-time output below is for Europe/Sofia. We set the time zone here, so
// the file prints the same on every machine. Remove the line to see your own.
process.env.TZ = 'Europe/Sofia';

// setDate() adds calendar days, adding 24 hours in milliseconds can cross a DST switch.
const due = new Date(2026, 0, 25); // January 25
const reminder = new Date(due);

reminder.setDate(reminder.getDate() + 10);
console.log(reminder.getMonth(), reminder.getDate()); // 1 4 (Feb 4)
console.log(due.getMonth(), due.getDate()); // 0 25

const pickup = new Date(2026, 2, 28, 12, 0); // March 28, 12:00
const dayInMs = 24 * 60 * 60 * 1000;

const plus24Hours = new Date(pickup.getTime() + dayInMs);
console.log(plus24Hours.getDate(), plus24Hours.getHours());
// 29 13 (in Europe/Sofia)

const nextDay = new Date(pickup);
nextDay.setDate(nextDay.getDate() + 1);
console.log(nextDay.getDate(), nextDay.getHours()); // 29 12
