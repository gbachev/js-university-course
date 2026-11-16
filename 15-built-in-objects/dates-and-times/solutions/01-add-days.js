export function addDays(date, days) {
    // Copy first: setDate() changes the date in place.
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
