export function launchCountdown(n) {
    if (n <= 0) {
        return 'Go!';
    }
    return n + ', ' + launchCountdown(n - 1);
}
