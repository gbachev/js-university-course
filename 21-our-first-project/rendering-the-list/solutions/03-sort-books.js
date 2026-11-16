function compareYears(a, b) {
    // null goes last, so it counts as larger than any year.
    if (a.year === null || b.year === null) {
        return (a.year === null) - (b.year === null);
    }
    return a.year - b.year;
}

export function sortBooks(books, by) {
    if (by === 'year') {
        return books.toSorted(compareYears);
    }
    return books.toSorted((a, b) =>
        a[by].localeCompare(b[by], undefined, { sensitivity: 'base' }),
    );
}
