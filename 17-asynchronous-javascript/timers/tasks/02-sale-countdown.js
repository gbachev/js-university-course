// Task 2: Countdown to the sale
// Lecture: Timers: setTimeout and setInterval
//
// Write startCountdown(seconds, onTick, onDone) with setInterval(). Every second it
// calls onTick with the seconds left, counting down: 3, then 2, then 1. One second
// after the last tick it calls onDone and stops the interval, so nothing is called
// after that. A countdown from 0 has no ticks: onDone comes after one second.
//
// Examples:
//   startCountdown(3, (left) => console.log(`${left}...`), () => console.log('Live'));
//   // 1 s: 3...   2 s: 2...   3 s: 1...   4 s: Live
//
// Run the tests: npm test -- 17-asynchronous-javascript/timers

export function startCountdown(seconds, onTick, onDone) {
    // Your code here
}
