export function parseAge(text) {
    // Number('') is 0, so an empty field needs its own check.
    if (text.trim() === '') {
        return null;
    }
    const age = Number(text);
    return Number.isNaN(age) ? null : age;
}
