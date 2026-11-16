// Task 3: Highlight the search
// Lecture: Regular Expressions
//
// A notes app highlights what the user searched for. Write highlight(text, search),
// which returns the text with every match of search wrapped in square brackets,
// ignoring case and keeping the original spelling: highlight('C++ and c++', 'c++')
// gives '[C++] and [c++]'. The search is user input, so characters such as +, . or
// ( must match themselves: escape them before building the RegExp. An empty search
// returns the text unchanged.
//
// Examples:
//   highlight('I write C++ at work.', 'c++')     // 'I write [C++] at work.'
//   highlight('Pay $4.50, not $4750.', '4.50')   // 'Pay $[4.50], not $4750.'
//
// Run the tests: npm test -- 15-built-in-objects/regular-expressions

export function highlight(text, search) {
    // Your code here
}
