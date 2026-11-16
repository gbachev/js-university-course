// Task 2: The visit counter
// Lecture: Scope and the Scope Chain
//
// Our page counts its visits in the visits variable at the top of this file.
// recordVisit() adds one visit and returns the new number of visits, and resetVisits()
// sets it back to 0. Right now recordVisit() returns 1 every time: it declares its own
// visits, which shadows the outer one. Fix it so both functions work with the outer
// visits variable.
//
// Examples:
//   recordVisit()   // 1
//   recordVisit()   // 2
//   resetVisits();
//   recordVisit()   // 1
//
// Run the tests: npm test -- 11-scope-and-variables/scope-and-scope-chain

let visits = 0;

export function recordVisit() {
    let visits = 0;
    visits = visits + 1;
    return visits;
}

export function resetVisits() {
    visits = 0;
}
