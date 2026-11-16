function toNumbers(version) {
    return version.split('.').map(Number);
}

// Negative when a is older than b, 0 when they are the same, positive when newer.
function compare(a, b) {
    const [majorA, minorA, patchA] = toNumbers(a);
    const [majorB, minorB, patchB] = toNumbers(b);
    return majorA - majorB || minorA - minorB || patchA - patchB;
}

export function satisfies(version, range) {
    const symbol = range[0];
    if (symbol !== '^' && symbol !== '~') {
        return compare(version, range) === 0;
    }

    const lowest = range.slice(1);
    const [major, minor] = toNumbers(lowest);
    let below;
    if (symbol === '~' || major === 0) {
        below = `${major}.${minor + 1}.0`;
    } else {
        below = `${major + 1}.0.0`;
    }
    return compare(version, lowest) >= 0 && compare(version, below) < 0;
}
