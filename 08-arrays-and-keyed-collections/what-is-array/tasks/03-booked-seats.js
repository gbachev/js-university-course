// Task 3: Count the booked seats
// Lecture: What is an Array?
//
// A cinema row is an array where the index is the seat number. When someone books a
// seat, we store their name at that index, so the row has empty slots for the free
// seats: row[2] = 'Anna' on an empty row gives [ <2 empty items>, 'Anna' ]. The
// function countBookedSeats(row) should return how many seats are booked, but it
// returns the length of the array, which counts the empty slots too. Fix it. An empty
// slot reads as undefined.
//
// Examples:
//   countBookedSeats(['Anna', 'Ben'])          // 2
//   countBookedSeats([, , 'Anna', , 'Ben'])    // 2
//
// Run the tests: npm test -- 08-arrays-and-keyed-collections/what-is-array

export function countBookedSeats(row) {
    return row.length;
}
