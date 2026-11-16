// Task 3: Copy the seating plan
// Lecture: Copying and Merging Arrays
//
// A seating plan for a wedding is an array of tables, and each table is an array of
// guest names. The planner wants to try changes on a copy and keep the original plan.
// The function copyPlan(plan) returns a copy where we can change, add or remove guests
// at any table without changing the original plan. A shallow copy is not enough here:
// the tables inside would still be shared. Guest names are strings, so copying each
// table one level deep is all we need.
//
// Examples:
//   const plan = [['Anna', 'Ben'], ['Carl']];
//   const copy = copyPlan(plan);
//   copy[0][0] = 'Dana';   // plan[0][0] is still 'Anna'
//
// Run the tests: npm test -- 08-arrays-and-keyed-collections/copying-merging

export function copyPlan(plan) {
    // Your code here
}
