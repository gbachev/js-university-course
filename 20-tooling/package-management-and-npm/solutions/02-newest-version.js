function toNumbers(version) {
    return version.split('.').map(Number);
}

function isNewer(a, b) {
    const [majorA, minorA, patchA] = toNumbers(a);
    const [majorB, minorB, patchB] = toNumbers(b);
    if (majorA !== majorB) {
        return majorA > majorB;
    }
    if (minorA !== minorB) {
        return minorA > minorB;
    }
    return patchA > patchB;
}

export function newestVersion(versions) {
    let newest = null;
    for (const version of versions) {
        if (newest === null || isNewer(version, newest)) {
            newest = version;
        }
    }
    return newest;
}
