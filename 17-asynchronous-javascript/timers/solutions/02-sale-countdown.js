export function startCountdown(seconds, onTick, onDone) {
    let secondsLeft = seconds;

    const countdownId = setInterval(() => {
        if (secondsLeft === 0) {
            clearInterval(countdownId);
            onDone();
            return;
        }
        onTick(secondsLeft);
        secondsLeft--;
    }, 1000);
}
