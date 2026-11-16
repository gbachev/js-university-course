function toNumbers(version) {
    const [major, minor = 0, patch = 0] = version.split('.').map(Number);
    return [major, minor, patch];
}

export function isSupported(nodeVersion, engine) {
    const [major, minor, patch] = toNumbers(nodeVersion.slice(1));
    const [lowestMajor, lowestMinor, lowestPatch] = toNumbers(engine.slice(2));
    const difference = major - lowestMajor || minor - lowestMinor || patch - lowestPatch;
    return difference >= 0;
}
