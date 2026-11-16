// Task 3: The exam task
// Lecture: Operator Precedence
//
// This is the exam task from the lecture. We work it out on paper, step by step:
// which operator runs first, and what are a, b and c at that moment? Then we write
// what we got in the answers object below: the result, and a, b and c after the line
// has run. We run the tests only when we are done. The example file of this lecture
// prints the answer, so we open it only to check.
//
//   let a = 3, b = 4, c = 5;
//   let result = ++a + b * c / 2 - a++ + 6 / (b-- + ++a - --c);
//
// Run the tests: npm test -- 04-operators/precedence

export const answers = {
    result: null,
    a: null,
    b: null,
    c: null,
};
