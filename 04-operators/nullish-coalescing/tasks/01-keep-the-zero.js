// Task 1: Keep the zero
// Lecture: Nullish Coalescing
//
// Our music player reads the saved volume with getVolume(savedVolume) and falls back
// to 50 when there is no saved volume. John Doe muted the player, saved volume 0, and
// the player came back at 50. Fix getVolume so that it falls back to 50 only when the
// saved volume is null or undefined. A saved 0 stays 0.
//
// Examples:
//   getVolume(80)          // 80
//   getVolume(0)           // 0
//   getVolume(undefined)   // 50
//
// Run the tests: npm test -- 04-operators/nullish-coalescing

export function getVolume(savedVolume) {
    return savedVolume || 50;
}
