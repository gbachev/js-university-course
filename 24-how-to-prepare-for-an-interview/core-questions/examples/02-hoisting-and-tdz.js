console.log(getTax(100)); // 20
function getTax(amount) {
    return amount * 0.2;
}

console.log(total); // undefined
var total = 10;

try {
    console.log(discount); // ReferenceError
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // ReferenceError: Cannot access 'discount' before initialization
}
let discount = 5;
