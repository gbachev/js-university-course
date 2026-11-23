// The fields a user may change. An array and includes(), so names every object
// inherits, such as 'constructor', are not on it.
const EDITABLE = ['company', 'role', 'status', 'appliedOn', 'url', 'notes'];

export function mergePatch(current, changes) {
    const unknown = Object.keys(changes).filter((name) => !EDITABLE.includes(name));
    if (unknown.length > 0) {
        throw new Error(`Unknown fields: ${unknown.join(', ')}`);
    }
    return { ...current, ...changes };
}
