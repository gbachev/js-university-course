export function getTicketPrice(age, isStudent) {
    // The most specific ranges go first, so the senior check comes before the adults.
    if (age < 12) {
        return 5;
    } else if (age < 18) {
        return 8;
    } else if (age >= 65) {
        return 6;
    } else if (isStudent) {
        return 9;
    } else {
        return 12;
    }
}
