// Task 2: Total views
// Lecture: BigInt
//
// Our video platform keeps the views of all time as a BigInt and the views of today
// as a plain number. totalViews(allTime, today) should return the two added
// together, as a BigInt, but it throws a TypeError, because BigInt and Number values
// cannot be mixed in arithmetic. Fix it with an explicit conversion. The views of
// today are always a whole number.
//
// Examples:
//   totalViews(1000n, 25)                // 1025n
//   totalViews(9007199254740993n, 7)     // 9007199254741000n
//
// Run the tests: npm test -- 06-types/bigint

export function totalViews(allTime, today) {
    return allTime + today;
}
