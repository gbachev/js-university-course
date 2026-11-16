// Dates for people, always with an explicit timeZone. Output checked in Node 22
// (full ICU), which prints an ordinary space before PM. Some runtimes, older Node
// versions among them, put a narrow no-break space (U+202F) there instead.
const orderedAt = new Date('2026-03-01T18:45:00Z');

const style = {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone: 'Europe/Sofia'
};

const us = new Intl.DateTimeFormat('en-US', style);
const de = new Intl.DateTimeFormat('de-DE', style);
const bg = new Intl.DateTimeFormat('bg-BG', style);

console.log(us.format(orderedAt)); // March 1, 2026 at 8:45 PM
console.log(de.format(orderedAt)); // 1. März 2026 um 20:45
console.log(bg.format(orderedAt)); // 1 март 2026 г. в 20:45

const newYork = new Intl.DateTimeFormat('en-US', {
    ...style,
    timeZone: 'America/New_York'
});
console.log(newYork.format(orderedAt)); // March 1, 2026 at 1:45 PM

const dayAndMonth = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    timeZone: 'Europe/Sofia'
});
console.log(dayAndMonth.format(orderedAt)); // Sunday, March 1

// dateStyle and a single part such as weekday do not mix.
try {
    new Intl.DateTimeFormat('en-US', { dateStyle: 'long', weekday: 'long' });
} catch (error) {
    console.log(error.name); // TypeError
}
