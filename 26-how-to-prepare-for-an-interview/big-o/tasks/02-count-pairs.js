// Task 2: Count the pairs
// Lecture: Big O Notation
//
// A twist on the gift card from the lecture: instead of one pair, the shop wants to
// know how many pairs of cart items spend the card exactly. countPairs(prices, budget)
// below checks every pair, which is O(n²). Make it O(n) with a Map while it gives
// the same results. A pair is two different items, so a single 25 never pairs with
// itself, but two items of 25 make one pair and three make three. An empty cart or a
// cart with one item gives 0. The tests also time a cart of 80,000 prices, which must
// take less than 250 ms. Hint: for each price, how many earlier prices complete it?
//
// Examples:
//   countPairs([12, 25, 8, 30, 20, 38], 50)   // 2 (30 + 20 and 12 + 38)
//   countPairs([25, 25, 25], 50)              // 3
//   countPairs([25], 50)                      // 0
//
// Run the tests: npm test -- 24-how-to-prepare-for-an-interview/big-o

export function countPairs(prices, budget) {
    let pairs = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[i] + prices[j] === budget) {
                pairs++;
            }
        }
    }
    return pairs;
}
