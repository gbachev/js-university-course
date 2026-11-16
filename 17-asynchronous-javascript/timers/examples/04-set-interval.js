// A countdown with setInterval(), stopped with clearInterval().
let secondsLeft = 3;

const countdownId = setInterval(() => {
    if (secondsLeft === 0) {
        clearInterval(countdownId);
        console.log('The sale is live');
        return;
    }
    console.log(`${secondsLeft}...`);
    secondsLeft--;
}, 1000);

// 3...
// 2...
// 1...
// The sale is live
