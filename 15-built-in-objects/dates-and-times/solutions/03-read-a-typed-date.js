export function parseTypedDate(text) {
    const parts = text.split('.');
    if (parts.length !== 3) {
        return null;
    }

    const [day, month, year] = parts.map(Number);
    const date = new Date(year, month - 1, day);

    // NaN parts give an Invalid Date, and a rolled-over date has other parts.
    if (
        date.getFullYear() !== year ||
        date.getMonth() !== month - 1 ||
        date.getDate() !== day
    ) {
        return null;
    }
    return date;
}
