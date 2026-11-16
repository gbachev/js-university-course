// Task 3: Free seats
// Lecture: The for Loop
//
// A cinema hall is an array of rows and every row is an array of seats: true for a
// taken seat, false for a free one. countFreeSeats(hall) should return how many
// seats are free, but it reports more free seats than the hall has. Find the bug in
// the loops and fix it. The rows do not all have the same length, and an empty hall
// has 0 free seats.
//
// Examples:
//   countFreeSeats([[true, false], [false, false, true]])   // 3
//   countFreeSeats([])                                      // 0
//
// Run the tests: npm test -- 05-control-flow/for

export function countFreeSeats(hall) {
    let freeSeats = 0;

    for (let row = 0; row < hall.length; row++) {
        for (let seat = 0; seat <= hall[row].length; seat++) {
            if (!hall[row][seat]) {
                freeSeats++;
            }
        }
    }

    return freeSeats;
}
