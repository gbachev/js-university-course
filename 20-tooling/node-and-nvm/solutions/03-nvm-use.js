function toNumbers(version) {
    return version.replace('v', '').split('.').map(Number);
}

function isNewer(a, b) {
    const [majorA, minorA, patchA] = toNumbers(a);
    const [majorB, minorB, patchB] = toNumbers(b);
    return (majorA - majorB || minorA - minorB || patchA - patchB) > 0;
}

export function pickVersion(installed, nvmrc) {
    const wanted = toNumbers(nvmrc.trim());
    let picked = null;
    for (const version of installed) {
        const numbers = toNumbers(version);
        // Every number in .nvmrc has to match; the ones it leaves out may be anything.
        const matches = wanted.every((number, index) => numbers[index] === number);
        if (matches && (picked === null || isNewer(version, picked))) {
            picked = version;
        }
    }
    return picked;
}
