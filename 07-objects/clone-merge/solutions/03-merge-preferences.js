export function mergePreferences(defaults, overrides) {
    const merged = { ...defaults };

    for (let key in overrides) {
        const value = overrides[key];
        const isGroup = typeof value === 'object' && value !== null;

        if (isGroup && typeof merged[key] === 'object') {
            // Both are groups: merge them instead of replacing the default group.
            merged[key] = { ...merged[key], ...value };
        } else {
            merged[key] = value;
        }
    }

    return merged;
}
