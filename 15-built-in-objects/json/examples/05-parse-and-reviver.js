// JSON.parse() builds a new value, and a reviver turns the date string back into a Date.
const text = '{"id":1042,"placedAt":"2026-11-15T09:30:00.000Z"}';

const order = JSON.parse(text);

console.log(order.id); // 1042
console.log(typeof order.placedAt); // string

const revived = JSON.parse(text, (key, value) => {
    if (key === 'placedAt') {
        return new Date(value);
    }
    return value;
});

console.log(revived.placedAt instanceof Date); // true
console.log(revived.placedAt.getUTCFullYear()); // 2026
