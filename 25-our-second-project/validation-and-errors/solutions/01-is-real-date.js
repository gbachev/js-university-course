// The regular expression checks the shape. Then we turn the date back into text: a
// day that does not exist rolls over (February 30 becomes March 2) and no longer
// starts with what we were given. The Z keeps the date in UTC, so the time zone of
// the machine cannot move it by a day.
export function isRealDate(text) {
    if (typeof text !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(text)) {
        return false;
    }
    const date = new Date(`${text}T00:00:00Z`);
    return !Number.isNaN(date.getTime()) && date.toISOString().startsWith(text);
}
