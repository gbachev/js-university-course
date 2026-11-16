export function applyDefaults(settings, defaults) {
    // setPrototypeOf() returns the object it changed.
    return Object.setPrototypeOf(settings, defaults);
}
