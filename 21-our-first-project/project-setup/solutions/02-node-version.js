// 'v22.12.0' -> [22, 12, 0], '22.12' -> [22, 12, 0]
function parts(version) {
    const numbers = version.replace(/^v/, '').split('.').map(Number);
    const [major = 0, minor = 0, patch = 0] = numbers;
    return [major, minor, patch];
}

export function meetsNodeVersion(version, minimum) {
    const have = parts(version);
    const need = parts(minimum);
    for (let i = 0; i < 3; i++) {
        if (have[i] !== need[i]) {
            return have[i] > need[i];
        }
    }
    return true;
}
