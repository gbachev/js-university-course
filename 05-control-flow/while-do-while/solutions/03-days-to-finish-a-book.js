export function daysToFinish(pages, pagesPerDay) {
    let pagesLeft = pages;
    let days = 0;

    // Keep reading while any page is left, even fewer than a full day.
    while (pagesLeft > 0) {
        pagesLeft -= pagesPerDay;
        days++;
    }

    return days;
}
