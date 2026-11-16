export function formatInput(input) {
    if (typeof input === 'string') {
        return input.trim();
    } else if (typeof input === 'number') {
        return input.toFixed(2);
    }
    return '';
}
