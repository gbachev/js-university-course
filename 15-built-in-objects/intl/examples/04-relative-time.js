// "3 days ago" and "in 2 hours": we subtract the dates, the formatter writes the words.
const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

console.log(rtf.format(-3, 'day')); // 3 days ago
console.log(rtf.format(2, 'hour')); // in 2 hours
console.log(rtf.format(-1, 'day')); // yesterday

const orderedAt = new Date('2026-03-01T18:45:00Z');
const now = new Date('2026-03-04T18:45:00Z');
const msPerDay = 24 * 60 * 60 * 1000;
const days = Math.round((orderedAt - now) / msPerDay);

console.log(rtf.format(days, 'day')); // 3 days ago
const rtfBg = new Intl.RelativeTimeFormat('bg', { numeric: 'auto' });
console.log(rtfBg.format(days, 'day')); // преди 3 дни
