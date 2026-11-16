export function getGuest(hall, row, seat) {
    // A missing row is undefined, and ?. stops there instead of throwing.
    return hall[row]?.[seat];
}
