// Task 2: Unanswered questions
// Lecture: undefined
//
// Our survey keeps the answer of each question, and a question the user skipped has
// no answer: its value is undefined. A colleague wrote isUnanswered(answer), but it
// also marks real answers as unanswered: a rating of 0, the answer false to a yes or
// no question and an empty comment ''. Fix it so only undefined counts as unanswered.
//
// Examples:
//   isUnanswered(undefined)   // true
//   isUnanswered(0)           // false
//   isUnanswered(false)       // false
//
// Run the tests: npm test -- 06-types/undefined

export function isUnanswered(answer) {
    return !answer;
}
