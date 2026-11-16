export function getWeeklyTotals(sales) {
    return sales.map(week => week.reduce((total, day) => total + day, 0));
}
