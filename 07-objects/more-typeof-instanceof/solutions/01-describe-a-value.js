export function describeValue(value) {
    if (value === null) {
        return 'null';
    } else if (value instanceof Array) {
        return 'array';
    } else if (value instanceof Date) {
        return 'date';
    }

    return typeof value;
}
