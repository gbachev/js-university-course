export function parseOrder(text) {
    return JSON.parse(text, (key, value) => {
        if (key.endsWith('At') && typeof value === 'string') {
            return new Date(value);
        }
        return value;
    });
}
