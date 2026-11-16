export function getRetryDelays(firstDelay, maxDelay) {
    const delays = [];
    let delay = firstDelay;

    // do...while: the first wait goes in before we compare it with maxDelay.
    do {
        delays[delays.length] = delay;
        delay *= 2;
    } while (delay <= maxDelay);

    return delays;
}
