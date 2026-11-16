// Task 1: The average rating
// Lecture: Operator Precedence
//
// Every product in our shop gets three ratings from 1 to 5, and we show their average.
// averageRating(first, second, third) should return the sum of the three ratings
// divided by 3. For the ratings 3, 4 and 5 it returns 8.666666666666666 instead of 4.
// Fix the expression with parentheses.
//
// Examples:
//   averageRating(3, 4, 5)   // 4
//   averageRating(5, 5, 5)   // 5
//
// Run the tests: npm test -- 04-operators/precedence

export function averageRating(first, second, third) {
    return first + second + third / 3;
}
