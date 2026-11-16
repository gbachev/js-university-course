// Task 1: Is the sale on?
// Lecture: Pure Functions and Side Effects
//
// isSaleActive(sale) tells the shop whether a sale is running. A sale looks like
// { name, startsAt, endsAt }, with both times in milliseconds (from Date.parse). The
// function reads Date.now(), so its answer changes from day to day and we cannot test
// it for a date of our choice. Make it pure: isSaleActive(sale, now) takes the time
// as a second argument. A sale is active from startsAt up to and including endsAt.
//
// Examples:
//   const winterSale = {
//       name: 'Winter',
//       startsAt: Date.parse('2026-12-01'),
//       endsAt: Date.parse('2027-01-01'),
//   };
//   isSaleActive(winterSale, Date.parse('2026-12-15'))    // true
//   isSaleActive(winterSale, Date.parse('2027-01-02'))    // false
//
// Run the tests: npm test -- 14-more-on-functions/pure

export function isSaleActive(sale) {
    const now = Date.now();
    return now >= sale.startsAt && now <= sale.endsAt;
}
