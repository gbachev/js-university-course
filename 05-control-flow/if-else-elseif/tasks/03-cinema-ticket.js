// Task 3: Cinema ticket
// Lecture: The "if", "else" and "else if" statements
//
// A colleague wrote getTicketPrice(age, isStudent) for our cinema, and customers
// complain about the prices. The rules: children under 12 pay 5, teenagers from 12
// to 17 pay 8, adults from 18 to 64 pay 12, or 9 when they are students, and seniors
// of 65 and above pay 6. Find and fix the bugs so every age gets the right price.
// Watch the edges: 18 is already an adult and 65 is already a senior.
//
// Examples:
//   getTicketPrice(10, false)   // 5
//   getTicketPrice(30, true)    // 9
//   getTicketPrice(70, false)   // 6
//
// Run the tests: npm test -- 05-control-flow/if-else-elseif

export function getTicketPrice(age, isStudent) {
    if (age < 12) {
        return 5;
    } else if (age >= 12 && age < 18) {
        return 8;
    } else if (age > 18) {
        if (isStudent) {
            return 9;
        } else {
            return 12;
        }
    } else if (age >= 65) {
        return 6;
    }
}
