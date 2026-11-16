export function countBookedSeats(row) {
    let booked = 0;

    for (let i = 0; i < row.length; i++) {
        // An empty slot reads as undefined, a booked seat holds a name.
        if (row[i] !== undefined) {
            booked++;
        }
    }

    return booked;
}
