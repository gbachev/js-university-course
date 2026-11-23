// Task 1: Repeated titles
// Lecture: Big O Notation
//
// repeatedTitles(titles) below works, but indexOf() and includes() are loops inside
// our loop, so it is O(n²) and crawls on a long list. Make it O(n) with a Set while
// it gives the same results: every title that appears more than once, listed once,
// in the order its first repeat appears. Titles are compared exactly, so 'Dune' and
// 'dune' are different. An empty list or a list with no repeats gives []. The tests
// also time a list of 50,000 titles, which must take less than 250 ms.
//
// Examples:
//   repeatedTitles(['Dune', 'Emma', 'Ulysses', 'Emma', 'Dune', 'Emma'])
//   // ['Emma', 'Dune']
//   repeatedTitles(['Dune', 'dune'])   // []
//
// Run the tests: npm test -- 24-how-to-prepare-for-an-interview/big-o

export function repeatedTitles(titles) {
    const repeated = [];
    for (let i = 0; i < titles.length; i++) {
        const title = titles[i];
        if (titles.indexOf(title) !== i && !repeated.includes(title)) {
            repeated.push(title);
        }
    }
    return repeated;
}
