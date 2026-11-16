// Task 1: The launch countdown
// Lecture: Recursive Functions
//
// Our shop counts down to a product launch: launchCountdown(3) returns the text
// '3, 2, 1, Go!'. It works for whole positive numbers, but launchCountdown(-1) and
// launchCountdown(1.5) never reach the base case and throw a RangeError. Fix the base
// case so it cannot be skipped: from 0 or below, the countdown is just 'Go!'. Keep the
// function recursive.
//
// Examples:
//   launchCountdown(3)      // '3, 2, 1, Go!'
//   launchCountdown(0)      // 'Go!'
//   launchCountdown(-1)     // 'Go!'
//   launchCountdown(1.5)    // '1.5, 0.5, Go!'
//
// Run the tests: npm test -- 14-more-on-functions/recursive

export function launchCountdown(n) {
    if (n === 0) {
        return 'Go!';
    }
    return n + ', ' + launchCountdown(n - 1);
}
