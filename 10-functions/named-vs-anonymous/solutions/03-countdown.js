export const countdown = function tick(seconds) {
    if (seconds <= 0) {
        return ['Go!'];
    }

    return [seconds, ...tick(seconds - 1)];
};
