// matchAll() gives every match with its groups, and named groups are easy to read.
const log = 'Shipped 2026-03-14, returned 2026-04-02.';
const isoDate = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/g;

for (const match of log.matchAll(isoDate)) {
    const { year, month, day } = match.groups;
    console.log(`${day}.${month}.${year} at index ${match.index}`);
}
// 14.03.2026 at index 8
// 02.04.2026 at index 29
