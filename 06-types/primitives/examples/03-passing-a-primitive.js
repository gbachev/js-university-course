// The function gets a copy of num, so the num outside does not change.
let num = 5;

function addTen(num) {
    num *= 4; // Modifying num does not affect the original value
    return num;
}

console.log(addTen(num)); // 20
console.log(num); // 5
