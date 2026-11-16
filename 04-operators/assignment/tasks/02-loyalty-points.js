// Task 2: Loyalty points
// Lecture: Assignment Operators
//
// Every euro a customer spends gives them 2 loyalty points. The function
// addPoints(points, amountSpent) should add the new points to the points the customer
// already has and return the result. A customer reported that her points went from
// 100 down to 40 after she spent 20 euros. Find the bug and fix it. Spending nothing
// keeps the points as they are.
//
// Examples:
//   addPoints(100, 20)   // 140
//   addPoints(0, 15)     // 30
//
// Run the tests: npm test -- 04-operators/assignment

export function addPoints(points, amountSpent) {
    points =+ amountSpent * 2;
    return points;
}
