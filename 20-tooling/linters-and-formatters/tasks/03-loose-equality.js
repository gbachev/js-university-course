// Task 3: Our own eqeqeq
// Lecture: Linters and Formatters
//
// Let's write a tiny version of the eqeqeq rule. findLooseEquality(source) takes the
// code of a file as a string and returns where it uses == or !=, as a list of
// { line, column } objects in the order they appear. Lines and columns start at 1,
// as in ESLint's output, and the column is where the operator starts. === and !==
// are fine and must not be reported. We can assume the code has no == or != inside
// strings or comments.
//
// Examples:
//   findLooseEquality('if (coupon == "SAVE10") {}')     // [{ line: 1, column: 12 }]
//   findLooseEquality('if (total !== 0) {}')            // []
//
// Run the tests: npm test -- 20-tooling/linters-and-formatters

export function findLooseEquality(source) {
    // Your code here
}
