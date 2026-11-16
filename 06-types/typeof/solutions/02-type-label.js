export function typeLabel(value) {
    if (value === null) {
        return 'null';
    }
    return typeof value;
}
