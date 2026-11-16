export function formatGuests(guests) {
    if (guests.length <= 1) {
        // join() gives '' for no guests and the name itself for one guest.
        return guests.join(', ');
    }

    const allButLast = guests.slice(0, -1);
    const last = guests[guests.length - 1];

    return allButLast.join(', ') + ' and ' + last;
}
