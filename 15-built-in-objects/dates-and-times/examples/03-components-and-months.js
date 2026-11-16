// Components give a date in local time, and months start at 0.
const delivery = new Date(2026, 11, 24, 18, 30); // Dec 24, 18:30

console.log(delivery.getFullYear()); // 2026
console.log(delivery.getMonth()); // 11
console.log(delivery.getDate()); // 24
console.log(delivery.getDay()); // 4
console.log(delivery.getHours(), delivery.getMinutes()); // 18 30

// Setters change the date in place.
delivery.setHours(10);
delivery.setMinutes(0);
console.log(delivery.getHours(), delivery.getMinutes()); // 10 0
