// Task 3: Days to finish a book
// Lecture: The while and do...while Loops
//
// Our reading list app tells us how many days a book will take. daysToFinish(pages,
// pagesPerDay) reads pagesPerDay pages a day until no pages are left and returns
// the number of days. The last day may have fewer pages to read, it still counts as
// a day. The function gives one day too few for most books. Find the bug in the
// loop condition and fix it. A book with 0 pages takes 0 days.
//
// Examples:
//   daysToFinish(100, 30)   // 4
//   daysToFinish(90, 30)    // 3
//
// Run the tests: npm test -- 05-control-flow/while-do-while

export function daysToFinish(pages, pagesPerDay) {
    let pagesLeft = pages;
    let days = 0;

    while (pagesLeft > pagesPerDay) {
        pagesLeft -= pagesPerDay;
        days++;
    }

    return days;
}
