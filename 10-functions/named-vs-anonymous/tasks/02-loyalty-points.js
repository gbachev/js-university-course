// Task 2: Loyalty points
// Lecture: Named vs Anonymous Functions
//
// A customer gets 1 point on the first day of a promotion, 2 on the second, 3 on the
// third and so on. sumPoints adds them up by calling itself, and loyaltyPoints(days)
// should return the total for that many days. But every call of loyaltyPoints throws
// a ReferenceError. Find out why and fix it, without changing sumPoints. For 0 days
// there are 0 points.
//
// Examples:
//   loyaltyPoints(3)   // 6 (1 + 2 + 3)
//   loyaltyPoints(0)   // 0
//
// Run the tests: npm test -- 10-functions/named-vs-anonymous

const totalPoints = function sumPoints(days) {
    return days <= 0 ? 0 : days + sumPoints(days - 1);
};

export function loyaltyPoints(days) {
    return sumPoints(days);
}
