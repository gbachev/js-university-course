// A line that starts with ( continues the line before it,
// so JavaScript reads price(price * 2) and tries to call a number.
let price = 5

try {
    let total = price
    (price * 2).toFixed(2)
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: price is not a function
}
