// Task 1: Strict or loose?
// Lecture: Comparison Operators
//
// A quiz app compares the score a player typed with the score we stored. The function
// isSameScore(typedScore, storedScore) returns true when the two scores are the same,
// and false otherwise. Right now it says that 10 and '10' are the same score, so a
// player can type the text '10' and still win. Fix it: a number and a string are never
// the same score.
//
// Examples:
//   isSameScore(10, 10)     // true
//   isSameScore(10, '10')   // false
//
// Run the tests: npm test -- 04-operators/comparison

export function isSameScore(typedScore, storedScore) {
    return typedScore == storedScore;
}
