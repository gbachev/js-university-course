export function countFreeSeats(hall) {
    let freeSeats = 0;

    for (let row = 0; row < hall.length; row++) {
        // < and not <=: the last seat of a row has the index length - 1.
        for (let seat = 0; seat < hall[row].length; seat++) {
            if (!hall[row][seat]) {
                freeSeats++;
            }
        }
    }

    return freeSeats;
}
