export function deepFreeze(obj) {
    for (const key in obj) {
        const value = obj[key];

        // Freeze the nested objects first, then the object itself.
        if (typeof value === 'object' && value !== null) {
            deepFreeze(value);
        }
    }

    return Object.freeze(obj);
}
