// A function that receives a date copies it and returns the copy.
function addDays(date, days) {
    const copy = new Date(date);
    copy.setDate(copy.getDate() + days);
    return copy;
}

const orderedAt = new Date(2026, 2, 28); // March 28
const dueAt = addDays(orderedAt, 5);

console.log(orderedAt.getDate()); // 28
console.log(dueAt.getMonth(), dueAt.getDate()); // 3 2
