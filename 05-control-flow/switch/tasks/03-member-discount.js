// Task 3: Member discount
// Lecture: The "switch" statement
//
// getDiscountPercent(memberLevel) should give gold members 20 percent off, silver
// members 10 and bronze members 5. Everyone else, guests included, gets 0. Right
// now every customer gets 0, even the gold ones. Find out why and fix the switch,
// so each level gets its own discount and nothing else changes.
//
// Examples:
//   getDiscountPercent('gold')     // 20
//   getDiscountPercent('guest')    // 0
//
// Run the tests: npm test -- 05-control-flow/switch

export function getDiscountPercent(memberLevel) {
    let discount;

    switch (memberLevel) {
        case 'gold':
            discount = 20;
        case 'silver':
            discount = 10;
        case 'bronze':
            discount = 5;
        default:
            discount = 0;
    }

    return discount;
}
