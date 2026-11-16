export function propertySource(obj, key) {
    if (Object.hasOwn(obj, key)) {
        return 'own';
    }
    return key in obj ? 'inherited' : 'missing';
}
